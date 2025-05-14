
/**
 * 
 * @param {User[]} users 
 * @returns {{label: string, value: string}[]}
 */
function usersToOptions(users)
{
	const options = []

	// Discord doens't support more than 25 choices
	// so we can't show more than 25 users in a select menu
	for (let i = 0; i < users.length && i < 25; i++)
	{
		options.push({
			label: `${users[i].id} : ${users[i].username ?? "No name"}`,
			value: String(users[i].id)
		})
	}
	return (options);
}

module.exports = {
	usersToOptions
}