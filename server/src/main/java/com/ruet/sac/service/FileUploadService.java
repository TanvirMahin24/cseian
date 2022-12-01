package com.ruet.sac.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileUploadService {


        private final String uploadLocation;



        public FileUploadService(@Value("${upload.location}") String uploadLocation) throws IOException {
            this.uploadLocation = uploadLocation;
            Path uploadPath = Paths.get(uploadLocation);
            if (!Files.exists(uploadPath)) {
                Files.createDirectory(uploadPath);
            }
        }

        public String saveFile(MultipartFile file, String filenameServer ) {


            String extension = "";

            int i = file.getOriginalFilename().lastIndexOf('.');
            if (i >= 0) {
                extension = file.getOriginalFilename().substring(i+1);
            }

            filenameServer += "."+extension;
            Path dest = Paths.get(uploadLocation + "/" + filenameServer);
            try {
                Files.copy(file.getInputStream(), dest, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                return String.valueOf(e);
            }

            return filenameServer;
        }
}