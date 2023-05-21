package xyz.poeschl.brettbutler.controller

import jakarta.transaction.Transactional
import org.springframework.data.domain.Sort
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import xyz.poeschl.brettbutler.dtos.*
import xyz.poeschl.brettbutler.exceptions.NotFoundException
import xyz.poeschl.brettbutler.repositories.*
import java.util.*

@RestController
@RequestMapping("/events")
@Transactional
class EventController(private val eventMapper: EventDtoMapper,
                      private val eventRepository: EventRepository,
                      private val playingGameRepository: PlayingGameRepository,
                      private val gameRepository: GameRepository,
                      private val userRepository: UserRepository) {

    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getAll(): List<EventDto> {
        val allEvents = eventRepository.findAll(Sort.by("eventDate"))
        return allEvents.map(eventMapper::toDto)
    }

    @GetMapping("/{id}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getOne(@PathVariable id: Long): EventDto {
        return eventRepository.findById(id)
                .map(eventMapper::toDto)
                .orElseThrow { NotFoundException() }
    }

    @PostMapping(consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun save(@RequestBody input: NewEventDto): EventDto {
        val saved = eventRepository.save(eventMapper.fromNewDto(input))
        return eventMapper.toDto(saved)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) {
        eventRepository.deleteById(id)
    }

    @PostMapping("/{eventId}/games", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun addGame(@PathVariable eventId: Long, @RequestBody newGame: NewPlayingGameDto): EventDto {
        val event = eventRepository.findById(eventId)
                .orElseThrow { NotFoundException("Event not found") }
        val game = gameRepository.findById(newGame.gameId)
                .orElseThrow { NotFoundException("Game not found") }
        val user = userRepository.findById(newGame.ownerId)
                .orElseThrow { NotFoundException("User not found") }

        playingGameRepository.saveAndFlush(PlayingGame(null, user, game, ArrayList(), event))
        return eventMapper.toDto(eventRepository.findById(event.id!!).get())
    }

    @DeleteMapping("/{eventId}/games/{gameId}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun removeGame(@PathVariable eventId: Long, @PathVariable gameId: Long): EventDto {
        val event = eventRepository.findById(eventId)
                .orElseThrow { NotFoundException("Event not found") }

        event.games.firstOrNull { it.id == gameId }?.let {
            playingGameRepository.deleteById(it.id!!)
            playingGameRepository.flush()
        }
        return eventMapper.toDto(eventRepository.findById(event.id!!).get())
    }

    @PostMapping("/{eventId}/games/{gameId}/players", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun addPlayer(@PathVariable eventId: Long, @PathVariable gameId: Long, @RequestBody newPlayer: NewPlayerDto): EventDto {
        val event = eventRepository.findById(eventId)
                .orElseThrow { NotFoundException("Event not found") }
        val user = userRepository.findById(newPlayer.userId)
                .orElseThrow { NotFoundException("User not found") }

        event.games.firstOrNull { it.id == gameId }?.let {
            it.player.add(user)
            playingGameRepository.saveAndFlush(it)
        }
        return eventMapper.toDto(eventRepository.findById(event.id!!).get())
    }

    @DeleteMapping("/{eventId}/games/{gameId}/players/{userId}", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun removePlayer(@PathVariable eventId: Long, @PathVariable gameId: Long, @PathVariable userId: Long): EventDto {
        val event = eventRepository.findById(eventId)
                .orElseThrow { NotFoundException("Event not found") }

        event.games.firstOrNull { it.id == gameId }?.let { game ->
            game.player.removeIf { it.id == userId }
            playingGameRepository.saveAndFlush(game)
        }
        return eventMapper.toDto(eventRepository.findById(event.id!!).get())
    }
}
