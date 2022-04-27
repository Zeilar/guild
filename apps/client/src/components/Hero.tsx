import styled from "styled-components";
import { Gallery, Container } from ".";
import { useState } from "react";
import type { Guild } from "@apps/client/types/guild";
import { useOnMount } from "use-ful-hooks-ts";

const Header = styled.header`
	--header-height: 30rem;
	position: relative;
	min-height: var(--header-height);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem;
	text-shadow: 0px 2px 10px black;
	&::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.65);
		z-index: -1;
	}
	@media (max-width: 768px) {
		min-height: unset;
		padding: 1rem;
	}
`;

const Name = styled.h1`
	line-height: 1.2;
	text-transform: uppercase;
	font-size: 5rem;
	@media (max-width: 768px) {
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
	margin-left: 5rem;
	font-family: var(--fontfamily-brand);
	filter: drop-shadow(0px 3px 3px black);
	@media (max-width: 768px) {
		width: 3rem;
		margin-left: 1rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		max-width: unset;
	}
`;

const Meta = styled.div`
	display: flex;
	align-items: center;
	font-family: var(--fontfamily-brand);
`;

type HeroProps = Pick<
	Guild,
	"faction" | "gallery" | "name" | "realm" | "region"
>;

export function Hero({ faction, gallery, name, realm, region }: HeroProps) {
	const [factionIcon, setFactionIcon] = useState<string>();

	useOnMount(() => {
		import(`../assets/images/factions/${faction}.png`).then(icon =>
			setFactionIcon(icon.default)
		);
	});

	return (
		<Header>
			<Container>
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
				</Content>
			</Container>
			<Gallery images={gallery} />
		</Header>
	);
}
