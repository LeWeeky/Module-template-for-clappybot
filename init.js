
const { sql_create_table } = require("../../libraries/sql/create");

async function init_module(connection)
{
	await sql_create_table(connection, "template", "id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(32), description VARCHAR(2000)");
}

module.exports = {
	init_module
}