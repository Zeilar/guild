import { Guild } from "@apps/client/types/guild";
import styled from "styled-components";
import { STRAPI_URL } from "../common/config";
import { Container } from "./Container";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";

const Biography = styled.p`
	line-height: 1.5;
	white-space: pre-line;
	font-family: var(--fontfamily-body);
	margin-top: 2rem;
	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

const Image = styled.img`
	object-fit: cover;
	border-radius: 2px;
`;

const Column = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: unset;
		&:nth-child(1) {
			order: 2;
		}
	}
`;

const Content = styled(Container)`
	flex-direction: row;
	gap: 1rem;
	text-align: left;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

type AboutProps = Pick<Guild, "biography" | "about_cover">;

export function About({ about_cover, biography }: AboutProps) {
	return (
		<Section>
			<Content>
				<Column>
					<SectionTitle>Who we are</SectionTitle>
					<Biography>{biography}</Biography>
				</Column>
				<Column>
					<Image
						src={`${STRAPI_URL}${about_cover.url}`}
						alt={about_cover.alternativeText}
						height="100%"
						width="100%"
					/>
				</Column>
			</Content>
		</Section>
	);
}
