package com.example.backend.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsersException extends RuntimeException{

	private UsersError usersError;
	private String error;

	public UsersException(UsersError usersError) {
		super(usersError.getDescription());
		this.usersError = usersError;
	}
}
