"use strict";

/**
 *  guild controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

function mapData(data = {}) {
	return {
		id: data.id,
		...data.attributes,
	};
}

function mapCollection(collection = []) {
	return collection.map(data => mapData(data));
}

module.exports = createCoreController("api::guild.guild", () => ({
	async find(ctx) {
		ctx.query = { ...ctx.query, local: "en" };
		const { data } = await super.find(ctx);
		const guild = data[0].attributes;
		guild.gallery = mapCollection(guild.gallery.data);
		guild.raid_times = mapCollection(guild.raid_times.data);
		guild.recruitments = mapCollection(guild.recruitments.data);
		guild.about_cover = mapData(guild.about_cover.data);
		return guild;
	},
}));
