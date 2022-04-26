export interface RaidTime {
	id: number;
	day: string;
	start: string;
	end: string;
}

export interface Recruitment {
	id: number;
	class: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	spec: string;
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
	realm: string;
	raid_times: RaidTime[];
	gallery: Image[];
	faction_images: Image[];
	order_halls_images: Image[];
	specs_images: Image[];
	recruitments: Recruitment[];
}
