package by.yurovski.society.service;

import by.yurovski.society.entity.User;
import by.yurovski.society.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    /**
     * function that finds all users
     * @return all users from db
     */

    @Transactional
    public List<User> findAll () {
        return userRepository.findAll();
    }

    /**
     * function that find user by login
     * @return user from db
     */

    @Transactional
    public User findUserByLogin (String login) {
        return userRepository.findUserByLogin(login);
    }

    @Transactional
    public User findUserById (int id) {
        return userRepository.findUserById(id);
    }
}
