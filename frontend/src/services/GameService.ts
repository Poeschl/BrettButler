import Game from "../models/Game";

export default class GameService {

  getAllGames = (): Game[] => {
    return [{
      id: 1,
      name: "Example Game",
      numberOfPlayers: "2-6",
      playtimeInMinutes: 190,
      description: "A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone",
      url: "https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition"
    },
      {
        id: 2,
        name: "Example Game 2",
        numberOfPlayers: "1-4",
        playtimeInMinutes: 60,
        description: "A random game to test with. It makes a lot of fun and can be learned pretty easily. Some more glibberisch. And even even even even More to be sure enought for and overflow. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone",
        url: "https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition"
      },
      {
        id: 3,
        name: "Example Game 3",
        numberOfPlayers: "4",
        playtimeInMinutes: 60,
        description: "A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone",
        url: "https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition"
      },
      {
        id: 4,
        name: "Example Game 4",
        numberOfPlayers: "1-4",
        playtimeInMinutes: 30,
        description: "A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone",
        url: "https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition"
      }]
  }

  saveGame = (game: Game) => {
    console.info("Save " + JSON.stringify(game))
  }

  deleteGame = (game: Game) => {
    console.info("Deletion of " + JSON.stringify(game))
  }

  getMaxPlayers = (game: Game): number => {
    if (game.numberOfPlayers.includes('-')) {
      return parseInt(game.numberOfPlayers.split('-')[1])
    } else {
      return parseInt(game.numberOfPlayers)
    }
  }

}
