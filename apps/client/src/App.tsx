import { useFetch } from "use-ful-hooks-ts";
import { Guild } from "../types/guild";
import { Introduction, RaidTimes } from "./components";
import { STRAPI_URL } from "./common/config";

export default function App() {
	const { data, isError, isLoading, isSuccess } = useFetch<Guild>(
		`${STRAPI_URL}/api/guilds?populate=raid_times&populate=gallery`
	);

	if (!isSuccess) {
		return null;
	}

	return (
		<>
			<Introduction
				faction={data.faction}
				name={data.name}
				realm={data.realm}
				region={data.region}
				gallery={data.gallery}
				biography={data.biography}
			/>
			<RaidTimes raid_times={data.raid_times} />
		</>
	);
}
