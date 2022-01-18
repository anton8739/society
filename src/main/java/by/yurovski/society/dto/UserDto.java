package by.yurovski.society.dto;

import by.yurovski.society.entity.Audio;
import by.yurovski.society.entity.User;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Data
public class UserDto {
    public UserDto (User user) {
        this.id=user.getId();
        this.login=user.getLogin();
        this.name=user.getName();
        this.surname=user.getSurname();
        this.email=user.getEmail();
        this.img=user.getImg();
        this.birthday=user.getBirthday();
        this.family=user.getFamily();
        this.education=user.getEducation();
        this.numberOfAudio=user.getAudioList().size();
    }
    private int id;
    private  String login;
    private String name;
    private String surname;
    private String email;
    private String img;
    private String birthday;
    private String family;
    private String education;
    private int numberOfAudio;

}
