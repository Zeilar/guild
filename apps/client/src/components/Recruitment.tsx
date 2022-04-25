import { Class } from "@apps/client/types/class";
import { useState } from "react";
import styled, { css } from "styled-components";
import { useOnMount } from "use-ful-hooks-ts";
import { Section, SectionTitle } from ".";
import { classes } from "../common/constants";

const OrderHalls = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
`;

const ByLine = styled.p`
	color: var(--palette-textMuted);
	font-family: var(--fontfamily-header);
	margin-top: 2rem;
`;

interface OrderHallWrapperProps {
	$src: string;
	$active: boolean;
	$class: string;
}

const OrderHallWrapper = styled.div<OrderHallWrapperProps>(
	({ $src, $active, $class }) => css`
		--classColor: var(--palette-${$class});
		--boxShadow: 0 0 5px black, 0 0 50px inset black,
			0 0 0 50rem inset rgba(0, 0, 0, 0.65);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		box-shadow: var(--boxShadow);
		transition: 0.25s;
		height: 25rem;
		background-image: url(${$src});
		background-position: center;
		background-size: cover;
		color: var(--classColor);
		filter: ${!$active ? "grayscale(1)" : "none"};
		&:hover {
			box-shadow: var(--boxShadow), 0 0 50px inset var(--classColor);
			transform: scale(1.05);
			z-index: 10;
		}
	`
);

const OrderHallHeader = styled.span`
	text-shadow: 0px 2px 10px black;
	font-family: var(--fontfamily-header);
	font-size: 1.5rem;
	position: absolute;
	top: 2rem;
`;

const Specs = styled.div`
	display: grid;
	grid-gap: 0.5rem;
`;

const Spec = styled.img`
	width: 50px;
	box-shadow: 0 0 0 2px black;
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
}

function OrderHallContainer({ $class }: OrderHallContainerProps) {
	const [image, setImage] = useState<string | undefined>();

	useOnMount(() => {
		import(`../assets/images/order_halls/${$class.slug}.jpg`).then(module =>
			setImage(module.default)
		);
	});

	return (
		<OrderHallWrapper $class={$class.slug} $active={true} $src={image}>
			<OrderHallHeader>{$class.name}</OrderHallHeader>
			<Specs>
				{$class.specs.map(spec => (
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

export function Recruitment() {
	return (
		<Section>
			<SectionTitle>Recruitment</SectionTitle>
			<OrderHalls>
				{classes.map($class => (
					<OrderHallContainer $class={$class} key={$class.name} />
				))}
			</OrderHalls>
			<ByLine>We will always consider exceptional applicants!</ByLine>
		</Section>
	);
}
