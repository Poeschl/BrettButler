package xyz.poeschl.brettbutler.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException

class NotFoundException(reason: String = "") : ResponseStatusException(HttpStatus.NOT_FOUND, reason)

class AlreadyExistingException(reason: String = "") : ResponseStatusException(HttpStatus.CONFLICT, reason)

