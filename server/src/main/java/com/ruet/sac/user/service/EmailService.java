package com.ruet.sac.user.service;

import com.ruet.sac.util.EmailDetailsUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

import java.io.*;
import java.net.*;
import java.util.*;
import javax.naming.*;
import javax.naming.directory.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService{

    @Value("${spring.mail.username}") private String sender;

    private final JavaMailSender emailSender;
    private final SpringTemplateEngine templateEngine;

    public Boolean sendConfirmationMessage(EmailDetailsUtil email) {
        try{

                MimeMessage message = emailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
                Context context = new Context();
                context.setVariables(email.getProperties());
                helper.setFrom(sender);
                helper.setTo(email.getRecipient());
                helper.setSubject(email.getSubject());
                String html = templateEngine.process(email.getTemplate(), context);
                helper.setText(html, true);
                emailSender.send(message);
                return true;
        }catch (Exception e)
        {
            return false;
        }

    }

    private static int hear( BufferedReader in ) throws IOException {
        String line = null;
        int res = 0;
        while ( (line = in.readLine()) != null ) {
            String pfx = line.substring( 0, 3 );
            try {
                res = Integer.parseInt( pfx );
            }
            catch (Exception ex) {
                res = -1;
            }
            if ( line.charAt( 3 ) != '-' ) break;
        }
        return res;
    }
    private static void say( BufferedWriter wr, String text )
            throws IOException {
        wr.write( text + "\r\n" );
        wr.flush();
        return;
    }
    private static ArrayList getMX( String hostName )
            throws NamingException {
        // Perform a DNS lookup for MX records in the domain
        Hashtable env = new Hashtable();
        env.put("java.naming.factory.initial",
                "com.sun.jndi.dns.DnsContextFactory");
        DirContext ictx = new InitialDirContext( env );
        Attributes attrs = ictx.getAttributes
                ( hostName, new String[] { "MX" });
        Attribute attr = attrs.get( "MX" );
        // if we don't have an MX record, try the machine itself
        if (( attr == null ) || ( attr.size() == 0 )) {
            attrs = ictx.getAttributes( hostName, new String[] { "A" });
            attr = attrs.get( "A" );
            if( attr == null )
                throw new NamingException
                        ( "No match for name '" + hostName + "'" );
        }
        // Huzzah! we have machines to try. Return them as an array list
        // NOTE: We SHOULD take the preference into account to be absolutely
        //   correct. This is left as an exercise for anyone who cares.
        ArrayList res = new ArrayList();
        NamingEnumeration en = attr.getAll();
        while ( en.hasMore() ) {
            String x = (String) en.next();
            String f[] = x.split( " " );
            if ( f[1].endsWith( "." ) )
                f[1] = f[1].substring( 0, (f[1].length() - 1));
            res.add( f[1] );
        }
        return res;
    }
    public boolean isAddressValid( String address ) {
        // Find the separator for the domain name
        int pos = address.indexOf( '@' );
        // If the address does not contain an '@', it's not valid
        if ( pos == -1 ) return false;
        // Isolate the domain/machine name and get a list of mail exchangers
        String domain = address.substring( ++pos );
        ArrayList mxList = null;
        try {
            mxList = getMX( domain );
        }
        catch (NamingException ex) {
            return false;
        }
        // Just because we can send mail to the domain, doesn't mean that the
        // address is valid, but if we can't, it's a sure sign that it isn't
        if ( mxList.size() == 0 ) return false;
        // Now, do the SMTP validation, try each mail exchanger until we get
        // a positive acceptance. It *MAY* be possible for one MX to allow
        // a message [store and forwarder for example] and another [like
        // the actual mail server] to reject it. This is why we REALLY ought
        // to take the preference into account.
        for ( int mx = 0 ; mx < mxList.size() ; mx++ ) {
            boolean valid = false;
            try {
                int res;
                Socket skt = new Socket( (String) mxList.get( mx ), 25 );
                BufferedReader rdr = new BufferedReader
                        ( new InputStreamReader( skt.getInputStream() ) );
                BufferedWriter wtr = new BufferedWriter
                        ( new OutputStreamWriter( skt.getOutputStream() ) );
                res = hear( rdr );
                if ( res != 220 ) throw new Exception( "Invalid header" );
                say( wtr, "EHLO orbaker.com" );
                res = hear( rdr );
                if ( res != 250 ) throw new Exception( "Not ESMTP" );
                // validate the sender address
                say( wtr, "MAIL FROM: <tim@orbaker.com>" );
                res = hear( rdr );
                if ( res != 250 ) throw new Exception( "Sender rejected" );
                say( wtr, "RCPT TO: <" + address + ">" );
                res = hear( rdr );
                // be polite
                say( wtr, "RSET" ); hear( rdr );
                say( wtr, "QUIT" ); hear( rdr );
                if ( res != 250 )
                    throw new Exception( "Address is not valid!" );
                valid = true;
                rdr.close();
                wtr.close();
                skt.close();
            }
            catch (Exception ex) {
                // Do nothing but try next host
            }
            finally {
                if ( valid ) return true;
            }
        }
        return false;
    }

}
