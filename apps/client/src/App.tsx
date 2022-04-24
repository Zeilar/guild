import { useFetch } from "use-ful-hooks-ts";
import { Guild } from "../types/guild";
import { Introduction } from "./components";
import { STRAPI_URL } from "./utils/url";

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
				faction="horde"
				name={data.name}
				realm=""
				region="eu"
				gallery={data.gallery}
			/>
		</>
	);
}
