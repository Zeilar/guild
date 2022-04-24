"use strict";

/**
 *  guild controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::guild.guild", () => ({
	async find(ctx) {
		ctx.query = { ...ctx.query, local: "en" };
		const { data } = await super.find(ctx);
		const guild = data[0].attributes;
		guild.raid_times = guild.raid_times.data.map(({ attributes, id }) => ({
			id,
			...attributes,
		}));
		guild.gallery = guild.gallery.data.map(({ attributes, id }) => ({
			id,
			...attributes,
		}));
		return guild;
	},
}));
