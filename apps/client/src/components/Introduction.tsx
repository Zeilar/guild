import styled, { css } from "styled-components";
import { Gallery } from "./Gallery";
import { useState } from "react";
import { Guild } from "@apps/client/types/guild";
import { useOnMount } from "use-ful-hooks-ts";

const gallery: string[] = [
	"https://i.imgur.com/nA5fcnZ.jpeg",
	"https://i.imgur.com/f1zGwOP.jpeg",
	"https://img-9gag-fun.9cache.com/photo/a81w8md_460swp.webp",
	"https://img-9gag-fun.9cache.com/photo/aqGz7dp_460swp.webp",
];

const Header = styled.header`
	--header-height: 30rem;
	box-shadow: 0 0 0 var(--header-height) inset rgba(0, 0, 0, 0.5);
	position: relative;
	height: var(--header-height);
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GuildName = styled.h1`
	text-transform: uppercase;
	font-size: 5rem;
	z-index: 10;
	color: white;
	text-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
	${({ theme }) => css`
		font-family: ${theme.typography.brand.fontFamily};
	`}
`;

const Faction = styled.img`
	width: 5rem;
	margin-right: 2rem;
`;

interface IntroductionProps {
	faction: Guild["faction"];
	name: Guild["name"];
	region: Guild["region"];
	realm: string;
	gallery: Guild["gallery"];
}

export function Introduction({
	faction,
	gallery,
	name,
	realm,
	region,
}: IntroductionProps) {
	const [factionIcon, setFactionIcon] = useState();

	useOnMount(() => {
		import(`../assets/images/${faction}.png`).then(icon =>
			setFactionIcon(icon.default)
		);
	});

	return (
		<Header>
			{factionIcon && (
				<Faction src={factionIcon} alt={faction} title={faction} />
			)}
			<GuildName>{name}</GuildName>
			<Gallery images={gallery} />
		</Header>
	);
}
