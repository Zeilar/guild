export interface RaidTime {
	id: number;
	day: string;
	start: string;
	end: string;
}

export interface ImageFormat {
	width: number;
	height: number;
	url: string;
}

export interface Image {
	id: number;
	alternativeText: string;
	url: string;
	formats: {
		thumbnail: ImageFormat;
		large: ImageFormat;
		medium: ImageFormat;
		small: ImageFormat;
	};
}

export interface Guild {
	name: string;
	biography: string;
	region: "eu" | "na" | "oce";
	faction: "alliance" | "horde";
	raid_times: RaidTime[];
	gallery: Image[];
}
