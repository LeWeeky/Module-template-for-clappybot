async function check(old_message, new_message) {
  // Create your own conditions for use this handler
  return old_message.author;
}

export async function parse(old_message, new_message) {
  console.log("a message from:", old_message.author.id, " has been updated");
}

export const name = "update";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;