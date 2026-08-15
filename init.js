
import { clappybot } from "clappybot";
import Template from "./models/Template.js";
import User from "./models/User.js";

export async function init_module(connection) {
  Template.use(clappybot.database);
  Template.init();

  User.use(clappybot.database);
  User.init();
}
