package by.yurovski.society.service;

import by.yurovski.society.entity.Foto;
import by.yurovski.society.entity.User;
import by.yurovski.society.repository.FotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class FotoService {

    @Autowired
    FotoRepository fotoRepository;
    /**
     * function that finds all foto of current User
     * @return fotos of current User from db
     */

    @Transactional
    public List<Foto> findFotosByAuthor (User user) {
        return fotoRepository.findByAuthor(user);
    }

    @Transactional
    public Foto findFotoById (int id) {

        return fotoRepository.findById(id);
    }

}
