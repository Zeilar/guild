const path = require("path");

module.exports = ({ env }) => ({
	connection: {
		client: "mysql",
		connection: {
			host: env("DB_HOST", "localhost"),
			port: env("DB_PORT", 3306),
			database: env("DB_NAME"),
			user: env("DB_USER", "root"),
			password: env("DB_PASSWORD", ""),
		},
	},
});
