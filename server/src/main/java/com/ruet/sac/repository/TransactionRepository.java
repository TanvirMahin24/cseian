package com.ruet.sac.repository;

import com.ruet.sac.entity.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, String> {
    @Query("Select t.id,t.reciepentBankAccountNo,t.bankName,t.status,tc.id,tc.name,tc.picture,e.eventName from Transaction t join t.transactionCreator tc join t.event e where e.id>1  order by t.id desc")
    List<Object[]> getAllPendingEventsRegistration();

    @Query("Select t.id,t.reciepentBankAccountNo,t.bankName,t.status,tc.id,tc.name,tc.picture,e.eventName from Transaction t join t.transactionCreator tc join t.event e where e.id>1 and t.validity=0 and ( t.id like %:searchText% or t.reciepentBankAccountNo like %:searchText% or t.bankName like %:searchText% or cast(tc.id as string) like %:searchText% or tc.name like %:searchText% or e.eventName like %:searchText%) order by t.id desc")
    List<Object[]> getAllFilteredPendingEventsRegistration(String searchText);

    @Query("Select t.id,t.reciepentBankAccountNo,t.bankName,t.status,tc.id,tc.name,tc.picture,e.eventName from Transaction t join t.transactionCreator tc join t.event e where e.id=1  order by t.id desc")
    List<Object[]> getAllPendingAlumniRegistration();

    @Query("Select t.id,t.reciepentBankAccountNo,t.bankName,t.status,tc.id,tc.name,tc.picture,e.eventName from Transaction t join t.transactionCreator tc join t.event e where e.id=1 and t.validity=0 and ( t.id like %:searchText% or t.reciepentBankAccountNo like %:searchText% or t.bankName like %:searchText% or cast(tc.id as string) like %:searchText% or tc.name like %:searchText% or e.eventName like %:searchText%) order by t.id desc")
    Page<Object[]> getAllFilteredPendingAlumniRegistration(Pageable pageable, String searchText);

    @Query("Select t.id ,t.reciepentBankAccountNo ,t.bankName ,t.status ,t.bankReceipt ,tc.id as string , tc.name , tc.series,tc.picture,tc.contactNo,e.id,e.eventName,e.eventDate from Transaction t join t.transactionCreator tc join t.event e where t.id = :transactionId")
    List<Object[]> getPendingEventRegistration(String transactionId);
}