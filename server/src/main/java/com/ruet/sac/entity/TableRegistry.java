package com.ruet.sac.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "table_registry")
public class TableRegistry {
    @Id
    @Column(name = "table_id", nullable = false)
    private Integer id;

    @Column(name = "table_name", nullable = false, length = 30)
    private String tableName;

    @Column(name = "registry_key", nullable = false)
    private Integer registryKey;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public Integer getRegistryKey() {
        return registryKey;
    }

    public void setRegistryKey(Integer registryKey) {
        this.registryKey = registryKey;
    }

}