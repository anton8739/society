package by.yurovski.society.controller;

import by.yurovski.society.dto.AuthRequestDto;
import by.yurovski.society.entity.User;
import by.yurovski.society.security.jwt.JWTProvider;
import by.yurovski.society.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/app")
public class AuthController {
    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTProvider jwtTokenProvider;
    @Autowired
    private UserService userService;
    @Autowired
    @Qualifier("customPasswordEncoder")
    PasswordEncoder passwordEncoder;

    @PostMapping("auth")
    public ResponseEntity login(@RequestBody AuthRequestDto requestDto) {

        String login = requestDto.getLogin();
        String password = requestDto.getPassword();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login, password));
        User user = userService.findUserByLogin(login);
        if (user == null) {
            throw new UsernameNotFoundException("User with username: " + login + " not found");
        }
        String token = jwtTokenProvider.createToken(login, user.getRole().toString());
        Map<Object, Object> response = new HashMap<>();
        response.put("login", login);
        response.put("token", token);
        response.put("username", user.getName());
        response.put("userSurname",user.getSurname());
        response.put("role", user.getRole());
        response.put("img",user.getImg());
        response.put("id",user.getId());
        response.put("status", "done");
        return ResponseEntity.ok(response);

    }
}

