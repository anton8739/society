package by.yurovski.society.controller;

import by.yurovski.society.dto.PossibleFriendDto;
import by.yurovski.society.dto.UserDto;
import by.yurovski.society.entity.Friend;
import by.yurovski.society.entity.User;
import by.yurovski.society.service.FriendService;
import by.yurovski.society.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/app")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    FriendService friendService;

    @GetMapping("/user/findAll")
    public List<UserDto> findAllUsers (){

        List<User> userList =userService.findAll();
        List<UserDto> resultList =userList.stream().map(user -> new UserDto(user)).collect(Collectors.toList());
        return resultList;
    }
    @GetMapping("/user/findUserById/{id}")
    public UserDto findUserById(@PathVariable("id") int id){
        User user =userService.findUserById(id);
        return new UserDto(user);
    }
    @GetMapping("/user/getUserFriendList/{id}")
    public List<UserDto> getUserFrienList(@PathVariable("id") int id){
        User user =userService.findUserById(id);
        List<Friend> friendList=friendService.findFriendsByUser(user);
        List<UserDto> userDtoList = friendList.stream().map(friend -> new UserDto(friend.getFriend())).collect(Collectors.toList()) ;
        return userDtoList;
    }
    @GetMapping("/user/getPossibleFriendList/{id}")
    public List<PossibleFriendDto> getPossibleFriendList(@PathVariable("id") int id){
        User user =userService.findUserById(id);
        List<PossibleFriendDto> possibleFriendDtoList =friendService.findPossibleFriends(user);
        return possibleFriendDtoList;
    }
}
