import type Game from './Game'

export default interface Event {
  readonly id: number | undefined
  date: Date
  games: Game[]
}

export const createEmptyEvent = (): Event => {
  return {
    id: undefined,
    date: new Date(),
    games: []
  }
}
