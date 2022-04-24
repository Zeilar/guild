const path = require("path");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

/** @type {import('@types/craco__craco').CracoConfig} */
const config = {
	babel: {
		plugins: ["babel-plugin-styled-components"],
	},
	webpack: {
		configure: config => {
			config.resolve.plugins = config.resolve.plugins.filter(
				plugin => !(plugin instanceof ModuleScopePlugin)
			);
			config.resolve.plugins.push(
				new TsConfigPathsPlugin({
					configFile: path.resolve(__dirname, "tsconfig.json"),
					extensions: [".ts", ".tsx", ".js", ".jsx"],
					mainFields: ["module", "main"],
				})
			);
			config.module.rules[1].oneOf.forEach(r => {
				if (r.loader && r.loader.indexOf("babel") !== -1) {
					r.exclude = /node_modules/;
					delete r.include;
				}
			});
			return config;
		},
	},
	jest: {
		configure: config => {
			config.resolver = "@nrwl/jest/plugins/resolver";
			return config;
		},
	},
};

module.exports = config;
