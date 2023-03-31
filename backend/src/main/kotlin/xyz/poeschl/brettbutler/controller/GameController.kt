package xyz.poeschl.brettbutler.controller

import kotlinx.coroutines.flow.Flow
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import xyz.poeschl.brettbutler.repositories.Game
import xyz.poeschl.brettbutler.repositories.GameRepository

@RestController
@RequestMapping("/game")
class GameController(private val gameRepository: GameRepository) {

    @GetMapping
    suspend fun getAll(): Flow<Game> {
        return gameRepository.findAll()
    }

    @GetMapping("/{id}")
    suspend fun get(@PathVariable("id") gameId: Long): Game? {
        return gameRepository.findById(gameId)
    }
}
