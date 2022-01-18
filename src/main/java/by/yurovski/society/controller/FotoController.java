package by.yurovski.society.controller;


import by.yurovski.society.dto.FotoDto;
import by.yurovski.society.dto.UserDto;
import by.yurovski.society.entity.Foto;
import by.yurovski.society.entity.User;
import by.yurovski.society.service.FotoService;
import by.yurovski.society.service.UserService;
import liquibase.pro.packaged.F;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/app")
public class FotoController {
    @Autowired
    FotoService fotoService;
    @Autowired
    UserService userService;

    @GetMapping("/foto/getFotoListByUserId/{id}")
    public List<FotoDto> findUserById(@PathVariable("id") int id){
        User user=userService.findUserById(id);
        List<Foto> fotoList =fotoService.findFotosByAuthor(user);
        List<FotoDto> fotoDtoList=fotoList.stream().map(foto -> new FotoDto(foto)).collect(Collectors.toList());
        return fotoDtoList;
    }
    @GetMapping("/foto/getFotoById/{id}")
    public FotoDto getFoto(@PathVariable("id") int id){
        Foto foto =fotoService.findFotoById(id);

        return new FotoDto(foto);
    }
}
