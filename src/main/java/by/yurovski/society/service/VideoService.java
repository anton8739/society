package by.yurovski.society.service;

import by.yurovski.society.entity.User;
import by.yurovski.society.entity.Video;
import by.yurovski.society.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class VideoService {
    @Autowired
    VideoRepository videoRepository;

    /**
     * function that finds video of current User
     * @return video of current User from db
     */

    @Transactional
    public List<Video> findVideosByUser(User user ){
        return videoRepository.findByUser(user);
    }
}
