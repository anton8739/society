package by.yurovski.society.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="audio", schema ="public")
public class Audio {
    @Id
    @Column(name="id")
    @GeneratedValue
    private int id;
    @Column(name="url")
    private  String url;
    @Column(name="img")
    private  String img;
    @Column(name="author")
    private  String author;
    @Column(name="title")
    private  String title;

    @ManyToOne( fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;
}
