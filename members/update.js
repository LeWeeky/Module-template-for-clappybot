async function check(old_member, new_member) {
  return !new_member.bot;
}

export async function parse(old_member, new_member) {
  console.log("member: ", old_member.user.username, " has been updated");
}

export const name = "update";
export const conditions = [check];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;