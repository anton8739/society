package by.yurovski.society.enums;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

public enum RoleEnum {


    ADMIN(Set.of(PermissonEnum.ADMIN_ACCESS,PermissonEnum.MODERATOR_ACCESS,PermissonEnum.CLIENT_ACCESS)),
    MODERATOR(Set.of(PermissonEnum.MODERATOR_ACCESS,PermissonEnum.CLIENT_ACCESS)),
    CLIENT(Set.of(PermissonEnum.CLIENT_ACCESS));

    RoleEnum(Set<PermissonEnum> permissions) {
        this.permissions = permissions;
    }
    private final Set<PermissonEnum> permissions;

    public Set<PermissonEnum> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getAuthorities() {
        return getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
    }

}
