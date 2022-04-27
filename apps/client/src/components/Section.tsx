import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 8rem;
	background-color: rgb(15, 15, 15);
	&:nth-child(2n) {
		background-color: rgb(10, 10, 10);
	}
	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
