package by.yurovski.society.service;

import by.yurovski.society.dto.PossibleFriendDto;

import by.yurovski.society.entity.Friend;
import by.yurovski.society.entity.User;

import by.yurovski.society.repository.FriendRepository;
import by.yurovski.society.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class FriendService {
    @Autowired
    FriendRepository friendRepository;
    @Autowired
    UserRepository userRepository;

    /**
     * function that finds all friends of current User
     *
     * @return friends of current User from db
     */

    @Transactional
    public List<Friend> findFriendsByUser(User user) {
        return friendRepository.findFriendByUser(user);
    }

    @Transactional
    public List<PossibleFriendDto> findPossibleFriends(User user) {

        List<PossibleFriendDto> possibleFriendDtoList= new ArrayList<>();
        List<User> userList = userRepository.findAll();
        List<Friend> friendsList = friendRepository.findAll();
        List<Friend> UserFriends =friendsList.stream().filter(friend -> friend.getUser().equals(user)).collect(Collectors.toList());

        for (User us : userList) {
            int counter =0;
            for (Friend friend : UserFriends){

                User user1 =friend.getFriend();

                if(friendRepository.existsFriendByUserAndFriend(us, user1) && us.getId() !=user.getId()) {
                    counter++;
                }
                System.out.println( us.getId()+" "+user1.getId()+" "+" "+friendRepository.existsFriendByUserAndFriend(us, user1));
            }
            possibleFriendDtoList.add(new PossibleFriendDto(us, counter));
        }
        possibleFriendDtoList.sort(Comparator.comparing(o -> o.getNumberOfFriends()));
        Collections.reverse(possibleFriendDtoList);
        return possibleFriendDtoList;
    }

}
