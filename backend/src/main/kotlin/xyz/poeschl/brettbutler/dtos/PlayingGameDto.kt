package xyz.poeschl.brettbutler.dtos

import org.mapstruct.InheritInverseConfiguration
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import xyz.poeschl.brettbutler.repositories.PlayingGame

data class PlayingGameDto(val id: Long,
                          val owner: UserDto,
                          val game: GameDto,
                          val players: ArrayList<UserDto>)

data class NewPlayingGameDto(val ownerId: Long, val gameId: Long)

data class NewPlayerDto(val userId: Long)

@Mapper(uses = [UserDtoMapper::class])
interface PlayingGameDtoMapper {

    @Mapping(source = "player", target = "players")
    fun toDto(playingGame: PlayingGame): PlayingGameDto

    @InheritInverseConfiguration
    @Mapping(target = "event", ignore = true)
    fun fromDto(playingGameDto: PlayingGameDto): PlayingGame
}
