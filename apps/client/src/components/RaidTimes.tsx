import styled, { css } from "styled-components";
import type { Guild } from "../../types/guild";
import { days } from "../common/constants";

const Wrapper = styled.section`
	background-color: rgb(15, 15, 15);
	padding: 2rem var(--container-gutters);
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	text-align: center;
`;

interface RaidTimeWrapperProps {
	$active: boolean;
}

const RaidTimeWrapper = styled.div<RaidTimeWrapperProps>(
	({ $active }) => css`
		text-transform: uppercase;
		transform: skew(-20deg);
		overflow: hidden;
		padding: 1rem;
		background-color: rgb(15, 15, 15);
		color: var(--${$active ? "palette-text" : "palette-textMuted"});
		box-shadow: 0 0 0 2px
			var(--${$active ? "palette-primary" : "palette-border"});
		z-index: ${$active ? 10 : 1};
	`
);

const RaidTimeContent = styled.div`
	transform: skew(20deg);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	height: 100%;
`;

type Props = Pick<Guild, "raid_times">;

export function RaidTimes({ raid_times }: Props) {
	return (
		<Wrapper>
			{days.map((day, i) => {
				const raidTime = raid_times.find(
					raid_time => raid_time.day === day
				);
				return (
					<RaidTimeWrapper $active={Boolean(raidTime)} key={i}>
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
		</Wrapper>
	);
}
