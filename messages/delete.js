async function check(message) {
  // Create your own conditions for use this handler
  return message.author;
}

export async function parse(message) {
  console.log("a message from:", message.author.id, " has been deleted");
}

export const name = "delete";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;