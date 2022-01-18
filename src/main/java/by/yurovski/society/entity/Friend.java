package by.yurovski.society.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="friends", schema ="public")
public class Friend {

    @Id
    @Column(name="id")
    @GeneratedValue
    private int id;
    @ManyToOne( fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;
    @ManyToOne( fetch=FetchType.EAGER)
    @JoinColumn(name="friend_id")
    private User friend;
}
