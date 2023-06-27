package xyz.poeschl.brettbutler.controller

import jakarta.transaction.Transactional
import org.springframework.data.domain.Sort
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import xyz.poeschl.brettbutler.dtos.GameDto
import xyz.poeschl.brettbutler.dtos.GameDtoMapper
import xyz.poeschl.brettbutler.exceptions.NotFoundException
import xyz.poeschl.brettbutler.repositories.GameRepository
import java.util.*

@RestController
@RequestMapping("/games")
@Transactional
class GameController(private val gameRepository: GameRepository,
                     private val gameMapper: GameDtoMapper) {


    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getAll(): List<GameDto> {
        val allGames = gameRepository.findAll(Sort.by("name"))
        return allGames.map(gameMapper::toDto)
    }

    @GetMapping("/{id}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getOne(@PathVariable id: Long): GameDto {
        return gameRepository.findById(id)
                .map(gameMapper::toDto)
                .orElseThrow { NotFoundException() }
    }

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE], produces = [MediaType.APPLICATION_JSON_VALUE])
    @Transactional
    fun save(@RequestBody input: GameDto): GameDto {
        val saved = gameRepository.save(gameMapper.fromDto(input))
        return gameMapper.toDto(saved)
    }

  @DeleteMapping("/{id}")
  @Transactional
    fun delete(@PathVariable id: Long) {
        gameRepository.deleteById(id)
    }
}
