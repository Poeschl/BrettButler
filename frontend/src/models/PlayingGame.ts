import type Game from "./Game";
import {createEmptyGame} from "./Game";
import type User from "./User";
import {createEmptyUser} from "./User";

export default interface PlayingGame {
  readonly id: number | undefined,
  owner: User,
  game: Game,
  players: User[]
}

export const createEmptyPlayingGame = (): PlayingGame => {
  return {
    id: undefined,
    owner: createEmptyUser(),
    game: createEmptyGame(),
    players: []
  }
}
