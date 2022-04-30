import { SpinnerCircularFixed } from "spinners-react";
import styled from "styled-components";

const Wrapper = styled.div<Props>(
	({ isLoading }) => `
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgb(10, 10, 10);
		z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
        opacity: ${isLoading ? 1 : 0};
        pointer-events: none;
	`
);

interface Props {
	isLoading: boolean;
}

export function PageSpinner({ isLoading }: Props) {
	return (
		<Wrapper isLoading={isLoading}>
			<SpinnerCircularFixed
				speed={200}
				color="var(--palette-primary)"
				secondaryColor="rgb(30, 30, 30)"
				enabled={isLoading}
				size={75}
			/>
		</Wrapper>
	);
}
