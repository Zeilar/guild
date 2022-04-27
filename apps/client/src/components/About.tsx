import { Guild } from "@apps/client/types/guild";
import styled from "styled-components";
import { Container } from "./Container";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

const Biography = styled.p`
	line-height: 1.5;
	white-space: pre-line;
	text-align: left;
	font-family: var(--fontfamily-body);
`;

type AboutProps = Pick<Guild, "biography">;

export function About({ biography }: AboutProps) {
	return (
		<Section>
			<Container>
				<SectionTitle>Who we are</SectionTitle>
				<Biography>{biography}</Biography>
			</Container>
		</Section>
	);
}
