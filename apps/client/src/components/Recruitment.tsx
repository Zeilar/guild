import { Class } from "@apps/client/types/class";
import type { Guild } from "@apps/client/types/guild";
import { useState } from "react";
import styled, { css } from "styled-components";
import { useOnMount } from "use-ful-hooks-ts";
import { Section, SectionTitle, Container } from ".";
import { classes } from "../common/constants";
import { useObservable } from "../hooks";

const OrderHalls = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 1rem;
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const ByLine = styled.p`
	color: var(--palette-textMuted);
	font-family: var(--fontfamily-header);
	margin-top: 2rem;
	text-align: left;
`;

interface OrderHallWrapperProps {
	$src?: string;
	$class: string;
}

const OrderHallWrapper = styled.div<OrderHallWrapperProps>(
	({ $src, $class }) => css`
		--classColor: var(--palette-${$class});
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		box-shadow: 0 0 5px black, 0 0 50px inset black,
			0 0 0 50rem inset rgba(0, 0, 0, 0.65);
		transition: transform 0.25s, filter 0.5s 0.25s, opacity 0.5s 0.25s;
		height: 25rem;
		background-image: url(${$src});
		background-position: center;
		background-size: cover;
		color: var(--classColor);
		user-select: none;
		opacity: 0.5;
		filter: grayscale(1);
		&.show {
			filter: grayscale(0);
			user-select: auto;
			opacity: 1;
		}
	`
);

const OrderHallHeader = styled.span`
	text-shadow: 0px 2px 10px black;
	font-family: var(--fontfamily-header-bold);
	font-size: 1.25rem;
	position: absolute;
	top: 0;
	font-weight: 700;
	padding: 1rem;
	width: 100%;
`;

const Specs = styled.div`
	display: flex;
	grid-gap: 1rem;
	padding: 1rem;
	justify-content: center;
	flex-wrap: wrap;
`;

const Spec = styled.img`
	width: 50px;
	box-shadow: 0 0 0 4px black;
`;

interface SpecContainerProps {
	$class: string;
	spec: string;
}

function SpecContainer({ $class, spec }: SpecContainerProps) {
	const [image, setImage] = useState<string | undefined>();

	useOnMount(() => {
		import(`../assets/images/specs/${$class}-${spec}.jpg`).then(module =>
			setImage(module.default)
		);
	});

	return <Spec src={image} alt={`${$class} ${spec}`} />;
}

interface OrderHallContainerProps {
	$class: Class;
	recruitments: Props["recruitments"];
}

function OrderHallContainer({ $class, recruitments }: OrderHallContainerProps) {
	const [image, setImage] = useState<string | undefined>();
	const ref = useObservable(
		element => {
			if (recruitments.length > 0) {
				element.classList.add("show");
			}
		},
		{ threshold: 0.5, unobserveOnIntersection: true }
	);

	useOnMount(() => {
		import(`../assets/images/order_halls/${$class.slug}.jpg`).then(module =>
			setImage(module.default)
		);
	});

	return (
		<OrderHallWrapper $class={$class.slug} $src={image} ref={ref}>
			<OrderHallHeader>{$class.name}</OrderHallHeader>
			<Specs>
				{recruitments.map(({ spec }) => (
					<SpecContainer
						key={`${$class}-${spec}`}
						$class={$class.slug}
						spec={spec}
					/>
				))}
			</Specs>
		</OrderHallWrapper>
	);
}

type Props = Pick<Guild, "recruitments">;

export function Recruitment({ recruitments }: Props) {
	return (
		<Section>
			<Container>
				<SectionTitle>Recruitment</SectionTitle>
				<OrderHalls>
					{classes.map($class => (
						<OrderHallContainer
							recruitments={recruitments.filter(
								recruitment =>
									recruitment.class.toLowerCase() ===
									$class.name.toLowerCase()
							)}
							$class={$class}
							key={$class.name}
						/>
					))}
				</OrderHalls>
				<ByLine>We will always consider exceptional applicants!</ByLine>
			</Container>
		</Section>
	);
}
