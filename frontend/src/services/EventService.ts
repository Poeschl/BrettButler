import type Event from '../models/Event'

export default class EventService {
  getAllEvents(): Event[] {
    return [{
      id: 1,
      date: new Date('2023-03-30T18:00:00.000Z'),
      games: [
        {
          id: 1,
          name: 'Example Game',
          numberOfPlayers: '2-6',
          playtimeInMinutes: 190,
          description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
          url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
        },
        {
          id: 2,
          name: 'Example Game 2',
          numberOfPlayers: '1-4',
          playtimeInMinutes: 60,
          description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
          url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
        }
      ]
    },
      {
        id: 2,
        date: new Date('2023-04-25T18:00:00.000Z'),
        games: [
          {
            id: 1,
            name: 'Example Game',
            numberOfPlayers: '2-6',
            playtimeInMinutes: 190,
            description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
            url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
          },
          {
            id: 2,
            name: 'Example Game 2',
            numberOfPlayers: '1-4',
            playtimeInMinutes: 60,
            description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
            url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
          },
          {
            id: 3,
            name: 'Example Game 3',
            numberOfPlayers: '1-4',
            playtimeInMinutes: 60,
            description: 'A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone.A random game to test with. It makes a lot of fun and can be learned pretty easily. Fun for everyone',
            url: 'https://boardgamegeek.com/boardgame/363112/shadowrun-sprawl-ops-legendary-edition'
          }
        ]
      }]
  }
}
