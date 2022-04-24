import styled, { css } from "styled-components";
import { Gallery } from "./Gallery";
import { useState } from "react";
import type { Guild } from "@apps/client/types/guild";
import { useOnMount } from "use-ful-hooks-ts";

const Header = styled.header`
	--header-height: 30rem;
	box-shadow: 0 0 0 var(--header-height) inset rgba(0, 0, 0, 0.75);
	position: relative;
	min-height: var(--header-height);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem var(--container-gutters);
	text-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
	@media (max-width: var(--breakpoint-mobile)) {
		padding: var(--container-gutters);
	}
`;

const Name = styled.h1`
	line-height: 1.2;
	text-transform: uppercase;
	font-size: 5rem;
	@media (max-width: var(--breakpoint-mobile)) {
		font-size: 2rem;
	}
`;

const Location = styled.h2`
	text-transform: uppercase;
	font-size: 1rem;
	color: var(--palette-textMuted);
	font-family: var(--fontfamily-header);
`;

const Faction = styled.img`
	width: 5rem;
	margin-left: auto;
	font-family: var(--fontfamily-brand);
	@media (max-width: var(--breakpoint-mobile)) {
		width: 4rem;
	}
`;

const Biography = styled.p`
	margin-top: 2rem;
	line-height: 1.2;
	white-space: pre-line;
	font-family: var(--fontfamily-body);
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: var(--breakpoint-mobile)) {
		max-width: unset;
	}
`;

const Meta = styled.div`
	display: flex;
	align-items: center;
	font-family: var(--fontfamily-brand);
`;

type IntroductionProps = Pick<
	Guild,
	"faction" | "gallery" | "name" | "realm" | "region" | "biography"
>;

export function Introduction({
	faction,
	gallery,
	name,
	realm,
	region,
	biography,
}: IntroductionProps) {
	const [factionIcon, setFactionIcon] = useState<string>();

	useOnMount(() => {
		import(`../assets/images/${faction}.png`).then(icon =>
			setFactionIcon(icon.default)
		);
	});

	return (
		<Header>
			<Content>
				<Meta>
					<Name>{name}</Name>
					{factionIcon && (
						<Faction
							src={factionIcon}
							alt={faction}
							title={faction}
						/>
					)}
				</Meta>
				<Location>
					{realm} - {region}
				</Location>
				<Biography>{biography}</Biography>
			</Content>
			<Gallery images={gallery} />
		</Header>
	);
}
