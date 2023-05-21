package xyz.poeschl.brettbutler.dtos

import org.mapstruct.Mapper
import org.mapstruct.Mapping
import xyz.poeschl.brettbutler.repositories.User

data class UserDto(val id: Long?,
                   val username: String)

data class NewUserDto(val username: String)

@Mapper
interface UserDtoMapper {

    fun toDto(user: User): UserDto

    fun fromDto(userDto: UserDto): User

    @Mapping(target = "id", ignore = true)
    fun fromNewDto(newUserDto: NewUserDto): User
}
