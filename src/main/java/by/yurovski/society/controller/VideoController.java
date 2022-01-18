package by.yurovski.society.controller;


import by.yurovski.society.dto.AudioDto;
import by.yurovski.society.dto.VideoDto;
import by.yurovski.society.entity.Audio;
import by.yurovski.society.entity.User;
import by.yurovski.society.entity.Video;
import by.yurovski.society.service.AudioService;
import by.yurovski.society.service.UserService;
import by.yurovski.society.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/app")
public class VideoController {
    @Autowired
    VideoService videoService;
    @Autowired
    UserService userService;

    @GetMapping("/video/getVideoListByUserId/{id}")
    public List<VideoDto> getVideoByUserId(@PathVariable("id") int id){
        User user=userService.findUserById(id);

        List<Video> videoList =videoService.findVideosByUser(user);

        List<VideoDto> videoDtoList=videoList.stream().map(video-> new VideoDto(video)).collect(Collectors.toList());
        System.out.println(videoDtoList);
        return videoDtoList;
    }
}
