import { AModel } from "clappybot";

export default class User extends AModel {
  static table = "users";
  static fields = {
    username: "string",
    email: "string",
    created_at: "datetime",
  };
}