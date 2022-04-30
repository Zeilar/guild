import styled, { css, keyframes } from "styled-components";
import type { Guild } from "../../types/guild";
import { days } from "../common/constants";
import { Section, SectionTitle, Container } from ".";
import { useObservable } from "../hooks";

const raidTimeAnimation = keyframes`
    0% {
        transform: var(--skewTransform) scale(0.5);
        opacity: 0;
    }
    50% {
        transform: var(--skewTransform) scale(1.25);
        opacity: 1;
    }
    100% {
        transform: var(--skewTransform) var(--scaleTransform);
        opacity: 1;
    }
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	> div {
		user-select: none;
		transform: var(--skewTransform) var(--scaleTransform);
		opacity: 0;
	}
	&.show > div {
		user-select: all;
		animation: ${raidTimeAnimation} 0.5s forwards;
	}
	${css`
		${[1, 2, 3, 4, 5, 6, 7]
			.map(
				e => `
                > div:nth-child(${e}) {
                    animation-delay: ${e * 50}ms;
                }   
            `
			)
			.join("")}
	`}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 1rem 2rem;
		grid-gap: 1rem;
	}
`;

interface RaidTimeWrapperProps {
	$active: boolean;
}

const RaidTimeWrapper = styled.div<RaidTimeWrapperProps>(
	({ $active }) => css`
		--skew: 20deg;
		--scaleTransform: ${$active ? "scale(1.1)" : "scale(1)"};
		--skewTransform: skew(calc(-1 * var(--skew)));
		text-transform: uppercase;
		overflow: hidden;
		padding: 1rem;
		background-color: ${$active ? "rgb(10, 10, 10)" : "rgb(25, 25, 25)"};
		color: var(--${$active ? "palette-text" : "palette-textMuted"});
		box-shadow: 0 0 0 2px
			var(--${$active ? "palette-primary" : "palette-border"});
		z-index: ${$active ? 10 : 1};
		transform: var(--skewTransform) var(--scaleTransform);
	`
);

const RaidTimeContent = styled.div`
	transform: skew(var(--skew));
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	height: 100%;
`;

const ByLine = styled.p`
	color: var(--palette-textMuted);
	font-family: var(--fontfamily-header);
	margin-top: 2rem;
	text-align: left;
`;

type Props = Pick<Guild, "raid_times">;

export function RaidTimes({ raid_times }: Props) {
	const daysElement = useObservable(
		element => {
			element.classList.add("show");
		},
		{ threshold: 1 }
	);
	return (
		<Section>
			<Container>
				<SectionTitle>Raid times</SectionTitle>
				<Content ref={daysElement}>
					{days.map((day, i) => {
						const raidTime = raid_times.find(
							raid_time => raid_time.day === day
						);
						return (
							<RaidTimeWrapper
								$active={Boolean(raidTime)}
								key={i}
							>
								<RaidTimeContent>
									<span>{day}</span>
									{raidTime && (
										<span>
											{raidTime.start} - {raidTime.end}
										</span>
									)}
								</RaidTimeContent>
							</RaidTimeWrapper>
						);
					})}
				</Content>
				<ByLine>* Server time</ByLine>
			</Container>
		</Section>
	);
}
