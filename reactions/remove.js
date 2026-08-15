async function check(reaction, user) {
  // Create your own conditions for use this handler
  return reaction && user;
}

export async function parse(reaction, user) {
  console.log("reaction deleted:", reaction);
}

export const name = "remove";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;