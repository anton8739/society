package by.yurovski.society.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="video", schema ="public")
public class Video {
    @Id
    @Column(name="id")
    @GeneratedValue
    private int id;
    @Column(name="title")
    private  String title;
    @Column(name="author")
    private  String author;
    @Column(name="views")
    private  int views;
    @Column(name="url")
    private  String url;
    @Column(name="img")
    private  String img;
    @Column(name="timeofcreation")
    private  String timeOfCreation;
    @ManyToOne( fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

}
