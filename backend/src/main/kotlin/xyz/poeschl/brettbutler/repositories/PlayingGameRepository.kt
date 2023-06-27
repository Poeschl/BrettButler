package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.*
import org.hibernate.Hibernate
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface PlayingGameRepository : CrudRepository<PlayingGame, Long> {
    fun saveAndFlush(playingGame: PlayingGame): PlayingGame

    fun flush()
}

@Entity
@Table(name = "playing_games")
data class PlayingGame(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(insertable = false) val id: Long?,
  @OneToOne @JoinColumn(name = "owner_id") var owner: User,
  @OneToOne @JoinColumn(name = "game_id") var game: Game,
  @ManyToMany(fetch = FetchType.EAGER) @JoinTable(
    name = "playing_game_user",
    joinColumns = [JoinColumn(name = "playing_game_id")],
    inverseJoinColumns = [JoinColumn(name = "user_id")]
  ) var player: MutableList<User>,
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
