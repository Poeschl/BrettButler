package xyz.poeschl.brettbutler.repositories

import jakarta.validation.constraints.Min
import jakarta.validation.constraints.Size
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.repository.kotlin.CoroutineCrudRepository
import org.springframework.stereotype.Repository

@Table(name = "games")
data class Game(
  @Id val id: Long,
  @Column("game_name") @Size(max = 200, message = "The name can be at least 200 characters long") var name: String,
  @Min(value = 2, message = "A game needs at least 2 player.") var numberOfPlayers: Int,
  @Size(max = 400, message = "The description can be at least 400 characters long") var description: String,
  @Size(max = 200, message = "The url can be at least 200 characters long") var url: String
)

@Repository
interface GameRepository : CoroutineCrudRepository<Game, Long> {

}
