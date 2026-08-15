import { AModel } from "clappybot";

export default class Template extends AModel {
  static table = "templates";
  static fields = {
    title: "string",
    description: "text",
  };
}