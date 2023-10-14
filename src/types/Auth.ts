import { Payload } from "./Payload";

export type AuthUser = Payload & {
    login: string;
    profile: string;
  }