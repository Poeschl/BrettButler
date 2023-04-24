import Game, {createEmptyGame} from "./Game";

export default interface PlayingGame {
  readonly id: number | undefined,
  owner: string,
  game: Game,
  players: string[]
}

export const createEmptyPlayingGame = (): PlayingGame => {
  return {
    id: undefined,
    owner: '',
    game: createEmptyGame(),
    players: []
  }
}
