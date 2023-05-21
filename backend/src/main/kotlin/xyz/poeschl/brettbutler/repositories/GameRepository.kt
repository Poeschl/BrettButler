package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.*
import jakarta.validation.constraints.Size
import org.hibernate.Hibernate
import org.springframework.data.domain.Sort
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface GameRepository : CrudRepository<Game, Long> {
    fun findAll(sort: Sort): List<Game>
}

@Entity
@Table(name = "games")
data class Game(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(insertable = false) val id: Long? = null,
        @Column(name = "game_name") @Size(max = 200) var name: String,
        @Column(name = "number_of_players") @Size(min = 1, max = 20) var numberOfPlayers: String,
        @Column(name = "playtime_in_minutes") var playtimeInMinutes: Int,
        @Size(max = 400) var description: String,
        @Size(max = 200) var url: String
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false
        other as Game

        return id != null && id == other.id
    }

    override fun hashCode(): Int = javaClass.hashCode()

    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id )"
    }

}
