package com.example.backend.user.service;

import com.example.backend.user.domain.User;
import com.example.backend.user.dto.RegisterUsers;
import com.example.backend.user.exception.UsersError;
import com.example.backend.user.exception.UsersException;
import com.example.backend.user.repository.UsersRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UsersService {

	private final UsersRepository usersRepository;


	public void join(RegisterUsers parameter) {

		Optional<User> optionalUser = usersRepository.findByEmail(parameter.getEmail());

		if (optionalUser.isPresent()) {
			throw new UsersException(UsersError.USERS_ALREADY_EMAIL);
		}

		if (!parameter.getPassword().equals(parameter.getPasswordCheck())) {
			throw new UsersException(UsersError.USERS_JOIN_RE_PASSWORD_UN_MATCH);
		}

		if (usersRepository.existsByNickname(parameter.getNickname())) {
			throw new UsersException(UsersError.USERS_ALREADY_NICKNAME);
		}

		String pw = BCrypt.hashpw(parameter.getPassword(), BCrypt.gensalt());

		User user = usersRepository.save(User.builder().email(parameter.getEmail()).password(pw)
			.nickname(parameter.getNickname()).phoneNumber(parameter.getPhoneNumber()).build());

		log.info(String.valueOf(user));
	}
}
