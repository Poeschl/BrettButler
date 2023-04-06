export default interface Game {
  readonly id: number,
  name: string,
  numberOfPlayers: string,
  playtimeInMinutes: number,
  description: string,
  url: string
}
