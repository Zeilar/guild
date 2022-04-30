import styled from "styled-components";
import { useFetch, useTitle } from "use-ful-hooks-ts";
import type { Guild } from "../types/guild";
import { STRAPI_URL } from "./common/config";
import {
	Recruitment,
	Apply,
	Hero,
	RaidTimes,
	About,
	PageSpinner,
} from "./components";

const ErrorHeader = styled.h1`
	color: var(--palette-primary);
	font-size: 3rem;
	text-align: center;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 1rem;
	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

export default function App() {
	const { data, isError, isLoading, isSuccess } = useFetch<Guild>(
		`${STRAPI_URL}/api/guilds?populate=raid_times,gallery,recruitments,about_cover`
	);
	useTitle(() => (isSuccess ? data.name : document.title));

	if (isError) {
		return (
			<ErrorHeader>
				The app has crashed! Please contact the webmaster and let us
				know.
			</ErrorHeader>
		);
	}

	return (
		<>
			<PageSpinner isLoading={isLoading} />
			{isSuccess && (
				<>
					<Hero
						faction={data.faction}
						name={data.name}
						realm={data.realm}
						region={data.region}
						gallery={data.gallery}
					/>
					<About
						about_cover={data.about_cover}
						biography={data.biography}
					/>
					<RaidTimes raid_times={data.raid_times} />
					<Recruitment recruitments={data.recruitments} />
					<Apply />
				</>
			)}
		</>
	);
}
