export default interface Game {
  readonly id: number | undefined,
  name: string,
  numberOfPlayers: string,
  playtimeInMinutes: number,
  description: string,
  url: string
}

export const createEmptyGame = (): Game => {
  return {
    id: undefined,
    name: "",
    numberOfPlayers: '',
    playtimeInMinutes: 0,
    description: '',
    url: ''
  }
}
