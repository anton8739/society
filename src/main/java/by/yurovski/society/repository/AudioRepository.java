package by.yurovski.society.repository;

import by.yurovski.society.entity.Audio;
import by.yurovski.society.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AudioRepository extends JpaRepository<Audio,Long> {

    List<Audio> findByUser(User user);
}
