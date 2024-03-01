import axios from "axios";
import type User from "@/models/User";
import { Env } from "@/Env";

export default class UserService {

  private baseEventUrl = Env.brettbutlerPathPrefix + '/rest/users'

  getUser = (username: string): Promise<User> => {
    return axios.get(`${this.baseEventUrl}?username=${username}`)
      .then(response => response.data)
  }

  createUser = (user: User): Promise<User> => {
    return axios.post(this.baseEventUrl, user)
      .then(response => response.data)
  }
}
