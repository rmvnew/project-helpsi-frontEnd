import { User } from "./User";

export type AuthUser = User & {
    login: string;
    profile: string;
  }