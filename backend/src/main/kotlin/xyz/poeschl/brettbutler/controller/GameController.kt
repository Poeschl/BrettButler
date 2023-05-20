package xyz.poeschl.brettbutler.controller

import org.mapstruct.Mapper
import org.springframework.data.domain.Sort
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import xyz.poeschl.brettbutler.repositories.Game
import xyz.poeschl.brettbutler.repositories.GameRepository
import java.util.*

@RestController
@RequestMapping("/games")
class GameController(private val gameRepository: GameRepository) {

    private val gameMapper = GameDtoMapperImpl()

    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getAll(): List<GameDto> {
        val allGames = gameRepository.findAll(Sort.by("name"))
        return allGames.map(gameMapper::toDto)
    }

    @GetMapping("/{id}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getOne(@PathVariable id: Long): GameDto {
        return gameRepository.findById(id)
                .map(gameMapper::toDto)
                .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
    }

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun save(@RequestBody input: GameDto): GameDto {
        val saved = gameRepository.save(gameMapper.fromDto(input))
        return gameMapper.toDto(saved)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) {
        gameRepository.deleteById(id)
    }

}


@Mapper
interface GameDtoMapper {

    fun toDto(game: Game): GameDto

    fun fromDto(gameDto: GameDto): Game
}

data class GameDto(val id: Long?,
                   val name: String,
                   val numberOfPlayers: String,
                   val playtimeInMinutes: Long,
                   val description: String,
                   val url: String)
