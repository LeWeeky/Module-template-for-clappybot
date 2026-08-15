async function check(member) {
  return !member.bot;
}

export async function parse(member) {
  console.log("new member:", member.user.username);
}

export const name = "join";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;