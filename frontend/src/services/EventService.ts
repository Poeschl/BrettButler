import type Event from '../models/Event'
import PlayingGame from "../models/PlayingGame";
import Game from "../models/Game";

export default class EventService {

  mock: Event[] = [{
    id: 1,
    date: new Date('2023-07-30T18:00:00.000Z'),
    playedGames: [
      {
        id: 1,
        owner: "User 1",
        players: ["Hans", "Peter"],
        game: {
          id: 1,
          name: 'Example Game',
          numberOfPlayers: '2-6',
          playtimeInMinutes: 190,
          description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
          url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
        }
      },
      {
        id: 2,
        owner: "User 3",
        players: ["Hans", "Peter", "Max"],
        game: {
          id: 2,
          name: 'Example Game 2',
          numberOfPlayers: '1-4',
          playtimeInMinutes: 60,
          description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
          url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
        }
      }]
  },
    {
      id: 2,
      date: new Date('2023-03-31T18:00:00.000Z'),
      playedGames: [
        {
          id: 1,
          owner: "User 1",
          players: ["Hans", "Peter"],
          game: {
            id: 1,
            name: 'Example Game',
            numberOfPlayers: '2-6',
            playtimeInMinutes: 190,
            description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
            url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
          }
        },
        {
          id: 2,
          owner: "User 3",
          players: ["Hans", "Peter", "Max"],
          game: {
            id: 2,
            name: 'Example Game 2',
            numberOfPlayers: '1-4',
            playtimeInMinutes: 60,
            description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
            url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
          }
        }]
    }]

  getAllEvents(): Event[] {
    return this.mock
  }

  saveEvent = (event: Event) => {
    console.info("Save " + JSON.stringify(event))
    this.mock.push(event)
  }

  deleteEvent = (event: Event) => {
    console.info("Deletion of " + JSON.stringify(event))
    this.mock = this.mock.filter(value => value.id !== event.id)
  }

  addUserToGame = (event: Event, user: string, game: PlayingGame) => {
    console.info("Add user to game of event")
    const existingGame = event.playedGames.find(value => value.id === game.id)
    if (existingGame !== undefined && !existingGame.players.includes(user)) {
      existingGame.players.push(user)
    }
  }

  removeUserFromGame = (event: Event, user: string, game: PlayingGame) => {
    console.info("Remove user from game of event")
    const existingGame = event.playedGames.find(value => value.id === game.id)
    if (existingGame !== undefined) {
      existingGame.players = existingGame.players.filter(value => value !== user)
    }
  }

  addGameToEvent = (event: Event, game: Game, user: string): PlayingGame => {
    console.info("Remove user from game of event")
    const newGame: PlayingGame = {id: undefined, game: game, players: [], owner: user}
    event.playedGames.push(newGame)
    return newGame
  }

  removeGameFromEvent = (event: Event, game: Game) => {
    const existingGame = event.playedGames.find(value => value.game.id === game.id)
    if (existingGame !== undefined) {
      event.playedGames = event.playedGames.filter(value => value.game.id !== game.id)
    }
  }
}
