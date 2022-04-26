import styled, { css } from "styled-components";
import type { Guild } from "../../types/guild";
import { days } from "../common/constants";
import { Section, SectionTitle, Container } from ".";

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
`;

interface RaidTimeWrapperProps {
	$active: boolean;
}

const RaidTimeWrapper = styled.div<RaidTimeWrapperProps>(
	({ $active }) => css`
		--skew: 20deg;
		--skewTransform: skew(calc(-1 * var(--skew)));
		text-transform: uppercase;
		overflow: hidden;
		padding: 1rem;
		background-color: ${$active ? "rgb(30, 30, 30)" : "rgb(15, 15, 15)"};
		color: var(--${$active ? "palette-text" : "palette-textMuted"});
		box-shadow: 0 0 0 2px
			var(--${$active ? "palette-primary" : "palette-border"});
		z-index: ${$active ? 10 : 1};
		transform: ${$active
			? "var(--skewTransform) scale(1.1)"
			: "var(--skewTransform)"};
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
`;

type Props = Pick<Guild, "raid_times">;

export function RaidTimes({ raid_times }: Props) {
	return (
		<Section>
			<Container>
				<SectionTitle>Raid times</SectionTitle>
				<Content>
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
