package by.yurovski.society.dto;

import by.yurovski.society.entity.Video;
import lombok.Data;

@Data
public class VideoDto {
    public  VideoDto (Video video) {
        this.id=video.getId();
        this.title=video.getTitle();
        this.author=video.getAuthor();
        this.views=video.getViews();
        this.url=video.getUrl();
        this.img=video.getImg();
        this.timeOfCreation=video.getTimeOfCreation();

    }
    private int id;
    private String title;
    private String author;
    private int views;
    private  String url;
    private  String img;
    private String timeOfCreation;


}
