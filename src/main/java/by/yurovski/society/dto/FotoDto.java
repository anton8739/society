package by.yurovski.society.dto;


import by.yurovski.society.entity.Foto;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class FotoDto {

    public  FotoDto (Foto foto) {
        this.id=foto.getId();
        this.url=foto.getUrl();
        this.data=foto.getData();
        this.authorName=foto.getAuthor().getName();
        this.authorSurname=foto.getAuthor().getSurname();
        this.authorImg=foto.getAuthor().getImg();
    }
    private int id;
    private String url;
    private Timestamp data;
    private String authorName;
    private String authorSurname;
    private String authorImg;
}
