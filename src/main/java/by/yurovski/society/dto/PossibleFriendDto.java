package by.yurovski.society.dto;

import by.yurovski.society.entity.User;
import lombok.Data;

@Data
public class PossibleFriendDto {


    public PossibleFriendDto(User user, int numberOfFriends) {
        this.id = user.getId();
        this.img = user.getImg();
        this.numberOfFriends = numberOfFriends;

    }

    private int id;
    private String img;
    private int numberOfFriends;


}
