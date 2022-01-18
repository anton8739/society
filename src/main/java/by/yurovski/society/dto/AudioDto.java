package by.yurovski.society.dto;

import by.yurovski.society.entity.Audio;
import lombok.Data;

@Data
public class AudioDto {
    public AudioDto(Audio audio) {
        this.id=audio.getId();
        this.url=audio.getUrl();
        this.img=audio.getImg();
        this.author=audio.getAuthor();
        this.title=audio.getTitle();
    }
    private int id;
    private String url;
    private String img;
    private String author;
    private String title;

}
