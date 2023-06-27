package xyz.poeschl.brettbutler.controller

import jakarta.transaction.Transactional
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import xyz.poeschl.brettbutler.dtos.NewUserDto
import xyz.poeschl.brettbutler.dtos.UserDto
import xyz.poeschl.brettbutler.dtos.UserDtoMapper
import xyz.poeschl.brettbutler.exceptions.AlreadyExistingException
import xyz.poeschl.brettbutler.exceptions.NotFoundException
import xyz.poeschl.brettbutler.repositories.UserRepository

@RestController
@RequestMapping("/users")
@Transactional
class UserController(private val userDtoMapper: UserDtoMapper,
                     private val userRepository: UserRepository) {

    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getByName(@RequestParam username: String): UserDto {
        val user = userRepository.findByUsername(username).orElseThrow { NotFoundException() }
        return userDtoMapper.toDto(user)
    }

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE], produces = [MediaType.APPLICATION_JSON_VALUE])
    @Transactional
    fun saveUser(@RequestBody newUserDto: NewUserDto): UserDto {
        val userCheck = userRepository.findByUsername(newUserDto.username)
        val newUser = if (userCheck.isEmpty) {
            userRepository.save(userDtoMapper.fromNewDto(newUserDto))
        } else {
            throw AlreadyExistingException()
        }
        return userDtoMapper.toDto(newUser)
    }
}
