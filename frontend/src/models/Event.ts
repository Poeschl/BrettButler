import type Game from './Game'

export default interface Event {
  readonly id: number
  date: Date
  games: Game[]
}
