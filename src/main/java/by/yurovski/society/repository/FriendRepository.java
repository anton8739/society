package by.yurovski.society.repository;

import by.yurovski.society.entity.Friend;
import by.yurovski.society.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FriendRepository extends JpaRepository<Friend,Long> {

    List<Friend> findFriendByUser(User user);
    boolean existsFriendByUserAndFriend(User user, User friend);
}
