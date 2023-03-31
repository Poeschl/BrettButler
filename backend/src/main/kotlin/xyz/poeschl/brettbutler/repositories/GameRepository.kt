package xyz.poeschl.brettbutler.repositories

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.repository.kotlin.CoroutineCrudRepository
import org.springframework.stereotype.Repository

@Table(name = "games")
data class Game(
    @Id val id: Long,
    @Column("game_name") var name: String,
    var numberOfPlayers: Int
)

@Repository
interface GameRepository : CoroutineCrudRepository<Game, Long> {

}
