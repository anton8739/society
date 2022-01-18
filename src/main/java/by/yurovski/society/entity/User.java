package by.yurovski.society.entity;


import by.yurovski.society.enums.RoleEnum;
import lombok.Data;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 *@author Anton Yurovski
 */

@Data
@Entity
@Table(name="users", schema ="public")

public class User {
    public User (){}
    @Id
    @Column(name="user_id")
    @GeneratedValue
    private int id;
    @Column(name="login")
    private  String login;
    @Column (name = "name")
    private String name;
    @Column (name = "surname")
    private String surname;
    @Column (name = "password")
    private String password;
    @Column (name = "email")
    private String email;
    @Column (name = "img")
    private String img;
    @Column (name = "birthday")
    private String birthday;
    @Column (name = "family")
    private String family;
    @Column (name = "education")
    private String education;
    @Enumerated(value = EnumType.STRING)
    @Column (name = "role")
    private RoleEnum role;
    @Column (name = "enabled")
    private boolean enabled;
    @OneToMany (fetch = FetchType.EAGER,
            mappedBy = "user",
            cascade = CascadeType.REMOVE)
    private List<Audio>  audioList;



}
