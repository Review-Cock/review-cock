package com.example.backend.config.security.data;

import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public record UserDetailsImpl(String userId, List<GrantedAuthority> roles) implements UserDetails {

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return roles.stream().map(role -> new SimpleGrantedAuthority("ROLE_" + role)).toList();
	}

	@Override public String getPassword() {return "password";}
	@Override public String getUsername() {return userId;}
	@Override public boolean isAccountNonExpired() {return true;}
	@Override public boolean isAccountNonLocked() {return true;}
	@Override public boolean isCredentialsNonExpired() {return true;}
	@Override public boolean isEnabled() {return true;}
}
