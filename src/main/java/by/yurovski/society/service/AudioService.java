package by.yurovski.society.service;


import by.yurovski.society.entity.Audio;
import by.yurovski.society.entity.Foto;
import by.yurovski.society.entity.User;
import by.yurovski.society.repository.AudioRepository;
import by.yurovski.society.repository.FotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AudioService {


    @Autowired
    AudioRepository audioRepository;
    /**
     * function that finds all audio of current User
     * @return audio of current User from db
     */

    @Transactional

    public List<Audio> findAudiosByUser (User user) {
        return audioRepository.findByUser(user);
    }
}
