package com.ruet.sac.entity;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Role {
    @Id
    @Column(name = "role_id", nullable = false)
    private Integer id;

    @Column(name = "role_name", nullable = false, length = 50)
    private String roleName;

    @Lob
    @Column(name = "role_description", nullable = false)
    private String roleDescription;

    @OneToMany(mappedBy = "userRole")
    private Set<Member> members = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

    public Set<Member> getMembers() {
        return members;
    }

    public void setMembers(Set<Member> members) {
        this.members = members;
    }

}