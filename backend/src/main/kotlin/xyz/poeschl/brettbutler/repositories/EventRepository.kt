package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.*
import org.hibernate.Hibernate
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.time.ZonedDateTime

@Repository
interface EventRepository : CrudRepository<Event, Long>

@Entity
@Table(name = "events")
data class Event(
        @Id val id: Long,
        @Column(name = "event_date") val eventDate: ZonedDateTime,
        @OneToMany(mappedBy = "event") val games: List<PlayingGame>
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false
        other as Event

        return id == other.id
    }

    override fun hashCode(): Int = javaClass.hashCode()
    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id )"
    }
}
