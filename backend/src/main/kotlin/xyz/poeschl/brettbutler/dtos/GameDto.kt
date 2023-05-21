package xyz.poeschl.brettbutler.dtos

import org.mapstruct.Mapper
import xyz.poeschl.brettbutler.repositories.Game

data class GameDto(val id: Long?,
                   val name: String,
                   val numberOfPlayers: String,
                   val playtimeInMinutes: Long,
                   val description: String,
                   val url: String)

@Mapper
interface GameDtoMapper {

    fun toDto(game: Game): GameDto

    fun fromDto(gameDto: GameDto): Game
}
