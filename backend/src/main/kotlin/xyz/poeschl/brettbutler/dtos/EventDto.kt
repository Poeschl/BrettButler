package xyz.poeschl.brettbutler.dtos

import org.mapstruct.InheritInverseConfiguration
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import xyz.poeschl.brettbutler.repositories.Event
import java.time.ZonedDateTime

data class EventDto(val id: Long,
                    val date: ZonedDateTime,
                    val playedGames: List<PlayingGameDto>)

data class NewEventDto(val date: ZonedDateTime)

@Mapper(uses = [PlayingGameDtoMapper::class])
interface EventDtoMapper {

    @Mapping(source = "eventDate", target = "date")
    @Mapping(source = "games", target = "playedGames")
    fun toDto(event: Event): EventDto

    @InheritInverseConfiguration
    fun fromDto(eventDto: EventDto): Event

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "date", target = "eventDate")
    @Mapping(target = "games", expression = "java(new ArrayList<>())")
    fun fromNewDto(newEventDto: NewEventDto): Event
}
