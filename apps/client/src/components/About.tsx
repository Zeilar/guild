import { Guild } from "@apps/client/types/guild";
import styled from "styled-components";
import { STRAPI_URL } from "../common/config";
import { useObservable } from "../hooks";
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
	box-shadow: 0 0 5px black;
`;

const Column = styled.div`
	opacity: 0;
	transform: translateX(2rem);
	width: 40%;
	transition: 1s 1s;
	&:first-child {
		transform: translateX(-2rem);
		margin-right: 5rem;
		width: 60%;
		transition-delay: 0.5s;
	}
	&.show {
		transform: translateX(0);
		opacity: 1;
	}
	@media (max-width: 768px) {
		width: unset;
		margin-right: 0;
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
	const biographyElement = useObservable(element => {
		element.classList.add("show");
	});
	const coverElement = useObservable(element => {
		element.classList.add("show");
	});
	return (
		<Section>
			<Content>
				<Column ref={biographyElement}>
					<SectionTitle>Who we are</SectionTitle>
					<Biography>{biography}</Biography>
				</Column>
				<Column ref={coverElement}>
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
