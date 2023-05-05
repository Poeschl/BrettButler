package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.*
import org.hibernate.Hibernate
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Entity
@Table(name = "playing_games")
data class PlayingGame(
        @Id val id: Long,
        @OneToOne @JoinColumn(name = "owner_id") val owner: User,
        @OneToOne @JoinColumn(name = "game_id") val game: Game,
        @ManyToMany(fetch = FetchType.LAZY) @JoinTable(name = "playing_game_user",
                joinColumns = [JoinColumn(name = "playing_game_id")],
                inverseJoinColumns = [JoinColumn(name = "user_id")]) val player: ArrayList<User>,
        @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "event_id") val event: Event
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false
        other as PlayingGame

        return id == other.id
    }

    override fun hashCode(): Int = javaClass.hashCode()

    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id )"
    }
}

@Repository
interface PlayingGameRepository : CrudRepository<PlayingGame, Long>
