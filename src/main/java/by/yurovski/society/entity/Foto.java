package by.yurovski.society.entity;


import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name="fotos", schema ="public")
public class Foto {

    @Id
    @Column(name="id")
    @GeneratedValue
    private int id;
    @Column(name="url")
    private  String url;
    @Column(name="timeofcreating")
    private Timestamp data;
    @ManyToOne( fetch=FetchType.EAGER)
    @JoinColumn(name="author_id")
    private User author;
}
