import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 4rem var(--container-gutters);
	background-color: rgb(15, 15, 15);
	&:nth-child(2n) {
		background-color: rgb(10, 10, 10);
	}
`;
