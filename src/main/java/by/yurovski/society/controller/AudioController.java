package by.yurovski.society.controller;


import by.yurovski.society.dto.AudioDto;
import by.yurovski.society.dto.FotoDto;
import by.yurovski.society.entity.Audio;
import by.yurovski.society.entity.Foto;
import by.yurovski.society.entity.User;
import by.yurovski.society.service.AudioService;
import by.yurovski.society.service.FotoService;
import by.yurovski.society.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/app")
public class AudioController {
    @Autowired
    AudioService audioService;
    @Autowired
    UserService userService;

    @GetMapping("/audio/getAudioListByUserId/{id}")
    public List<AudioDto> findUserById(@PathVariable("id") int id){
        User user=userService.findUserById(id);
        System.out.println("done");
        List<Audio> audioList =audioService.findAudiosByUser(user);

        List<AudioDto> audioDtoList=audioList.stream().map(audio -> new AudioDto(audio)).collect(Collectors.toList());
        System.out.println(audioDtoList);
        return audioDtoList;
    }
}
