package by.yurovski.society.repository;

import by.yurovski.society.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findAll ();
    User findUserByLogin (String login);
    User findUserById(int id);
}
