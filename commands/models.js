const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");
const { User } = require("../models/User");
const { colors } = require("../../../libraries/colors");
const { getModelsRows } = require("../utils/getModelsRows");

async function parse(interaction, cmd, args)
{
	const embed = new EmbedBuilder()
	.setColor(colors.light_blue)
	.setDescription(
		"# 📊 Let's work with Models!\n"+
		"## ❓ What is a model\n"+
		"A model is a representation of a specific type of data in your application. It defines:\n"+
		"- 🏗️ The structure of the data (fields, types, relationships).\n"+
		"- 📂 How the data is stored in the database (tables, columns).\n"+
		"- 🧠 The logic related to that data (validations, default values, business rules).\n"+
		"Models act as a bridge between your code and the database. They allow you to create, "+
		"read, update, and delete (CRUD) records using object-oriented code instead of raw SQL.\n"+
		"## 💡 Example\n"+
		"```js\n"+
`
class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}
`+
		"```\n"+
		"Here, we've defined the `users` table, which takes a username as a `string` "+
		"(a `VARCHAR` with a maximum size of 255 characters), an email as a `string` too, "+
		"created_at as a `datetime` (takes the `CURRENT_TIMESTAMP` by default at creation of "+
		"the element in your database).\n"+
		"## 🕵 How to deal with\n"+
		"A great deal of documentation work is in progress, but in the meantime here are a few "+
		"examples of how it's used.\n"+
		"```js"+
`
// Import your model (replace the path with your own)
const { User } = require("../models/User");

// Define the database to be used by your model
User.use(clappybot.database);

// Initialise the table (this sould be in your init.js)

User.init()

// Create a new instance and save it to the database

const user = new User({username: "Goya", email: "goya@clappycrew.com"});
user.save();

// The "create" method creates the new element and saves it directly

const user2 = User.create({username: "LeWeeky", email: "leweeky@clappycrew.com"});

// Get all users

const users = User.all()

// Get users with one or more specific fields

const some_users = User.findBy({username: "LeWeeky"});

// Get the first user from users with one or more specific fields

const leweeky = User.firstBy({username: "LeWeeky"});

// Edit fields 

user.username = "An other name";
user.email = "An other email";
user.save();

// Delete a users

user.delete();
user2.delete();
`+
	"```"
	)

	const rows = await getModelsRows();

	if (interaction.options)
	{
		// Commande slash (/command)
		interaction.reply({embeds: [embed], components: rows})
	}
	else
	{
		// Commande classique (+command)
		interaction.channel.send({embeds: [embed], components: rows})
	}
}

module.exports = {
	parse,
	name: "models",
	builder: new SlashCommandBuilder()
	.setName("models")
	.setDescription("Quick doc/example to show you what is a model."),
	any_guild: false,
	dm: false
}