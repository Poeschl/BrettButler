import type PlayingGame from "./PlayingGame";

export default interface Event {
  readonly id: number | undefined
  date: Date
  playedGames: PlayingGame[]
}

export const createEmptyEvent = (): Event => {
  return {
    id: undefined,
    date: new Date(),
    playedGames: []
  }
}
