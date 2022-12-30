package com.ruet.sac.entity;

import javax.persistence.*;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @Column(name = "transaction_id", nullable = false, length = 100)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "transaction_creator", nullable = false)
    private Member transactionCreator;

    @Column(name = "reciepent_bank_account_no", nullable = false, length = 100)
    private String reciepentBankAccountNo;

    @Lob
    @Column(name = "bank_name", nullable = false)
    private String bankName;

    @Lob
    @Column(name = "bank_receipt", nullable = false)
    private String bankReceipt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "event_id", nullable = false)
    private EventDetail event;

    @Column(name = "status", nullable = false)
    private Integer status;

    @Column(name = "validity", nullable = false)
    private Integer validity;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Member getTransactionCreator() {
        return transactionCreator;
    }

    public void setTransactionCreator(Member transactionCreator) {
        this.transactionCreator = transactionCreator;
    }

    public String getReciepentBankAccountNo() {
        return reciepentBankAccountNo;
    }

    public void setReciepentBankAccountNo(String reciepentBankAccountNo) {
        this.reciepentBankAccountNo = reciepentBankAccountNo;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankReceipt() {
        return bankReceipt;
    }

    public void setBankReceipt(String bankReceipt) {
        this.bankReceipt = bankReceipt;
    }

    public EventDetail getEvent() {
        return event;
    }

    public void setEvent(EventDetail event) {
        this.event = event;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getValidity() {
        return validity;
    }

    public void setValidity(Integer validity) {
        this.validity = validity;
    }

}