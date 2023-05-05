package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.validation.constraints.Size
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Entity
@Table(name = "games")
data class Game(
        @Id val id: Long,
        @Column(name = "game_name") @Size(max = 200) var name: String,
        @Column(name = "number_of_players") @Size(min = 1, max = 20) var numberOfPlayers: String,
        @Column(name = "playtime_in_minutes") var playtimeInMinutes: Int,
        @Size(max = 400) var description: String,
        @Size(max = 200) var url: String
)

@Repository
interface GameRepository : CrudRepository<Game, Long>
