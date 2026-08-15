async function check(message) {
  // Create your own conditions for use this handler
  return message.author;
}

export async function parse(message) {
  console.log("new message from:", message.author.id);
}

export const name = "create";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
