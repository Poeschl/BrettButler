package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.*
import org.hibernate.Hibernate
import org.springframework.data.domain.Sort
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.time.ZonedDateTime

@Repository
interface EventRepository : CrudRepository<Event, Long> {

    fun findAll(sort: Sort): List<Event>
}

@Entity
@Table(name = "events")
data class Event(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(insertable = false) val id: Long?,
        @Column(name = "event_date") var eventDate: ZonedDateTime,
        @OneToMany(mappedBy = "event") var games: MutableList<PlayingGame>
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
