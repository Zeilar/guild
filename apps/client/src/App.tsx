import { useFetch, useTitle } from "use-ful-hooks-ts";
import type { Guild } from "../types/guild";
import { STRAPI_URL } from "./common/config";
import { Recruitment, Apply, Introduction, RaidTimes } from "./components";

export default function App() {
	const { data, isError, isLoading, isSuccess } = useFetch<Guild>(
		`${STRAPI_URL}/api/guilds?populate=raid_times,gallery`
	);
	useTitle(() => (isSuccess ? data.name : document.title));

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
			<Recruitment />
			<Apply />
		</>
	);
}
