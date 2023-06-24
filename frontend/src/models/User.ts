export default interface User {
  readonly id: number | undefined,
  username: string
}

export const createEmptyUser = (): User => {
  return {
    id: undefined,
    username: ""
  }
}
