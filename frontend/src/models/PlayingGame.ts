import Game, {createEmptyGame} from "./Game";
import User, {createEmptyUser} from "./User";

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
