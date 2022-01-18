package by.yurovski.society.repository;

import by.yurovski.society.entity.Foto;
import by.yurovski.society.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FotoRepository extends JpaRepository<Foto,Long> {

    List<Foto> findByAuthor(User user);
    Foto findById(int id);
}
