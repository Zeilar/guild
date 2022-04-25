import { Class } from "@apps/client/types/class";

export const days = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
];

export const classes: Class[] = [
	{
		name: "Death Knight",
		slug: "death_knight",
		specs: ["blood", "frost", "unholy"],
	},
	{
		name: "Demon Hunter",
		slug: "demon_hunter",
		specs: ["havoc", "vengeance"],
	},
	{
		name: "Druid",
		slug: "druid",
		specs: ["balance", "feral", "guardian", "restoration"],
	},
	{
		name: "Hunter",
		slug: "hunter",
		specs: ["beast_mastery", "marksmanship", "survival"],
	},
	{
		name: "Mage",
		slug: "mage",
		specs: ["arcane", "fire", "frost"],
	},
	{
		name: "Monk",
		slug: "monk",
		specs: ["brewmaster", "mistweaver", "windwalker"],
	},
	{
		name: "Paladin",
		slug: "paladin",
		specs: ["holy", "protection", "retribution"],
	},
	{
		name: "Priest",
		slug: "priest",
		specs: ["discipline", "holy", "shadow"],
	},
	{
		name: "Rogue",
		slug: "rogue",
		specs: ["assassination", "outlaw", "subtlety"],
	},
	{
		name: "Shaman",
		slug: "shaman",
		specs: ["elemental", "enhancement", "restoration"],
	},
	{
		name: "Warlock",
		slug: "warlock",
		specs: ["affliction", "demonology", "destruction"],
	},
	{
		name: "Warrior",
		slug: "warrior",
		specs: ["arms", "fury", "protection"],
	},
];
