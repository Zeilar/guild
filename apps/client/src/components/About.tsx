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

const ImageContainer = styled.div`
	width: 100%;
`;

const Content = styled(Container)`
	flex-direction: row;
	gap: 1rem;
	text-align: left;
`;

type AboutProps = Pick<Guild, "biography" | "about_cover">;

export function About({ about_cover, biography }: AboutProps) {
	return (
		<Section>
			<Content>
				<div>
					<SectionTitle>Who we are</SectionTitle>
					<Biography>{biography}</Biography>
				</div>
				<ImageContainer>
					<Image
						src={`${STRAPI_URL}${about_cover.url}`}
						alt={about_cover.alternativeText}
						height="100%"
						width="100%"
					/>
				</ImageContainer>
			</Content>
		</Section>
	);
}
