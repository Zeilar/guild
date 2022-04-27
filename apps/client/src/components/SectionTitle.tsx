import styled from "styled-components";

export const SectionTitle = styled.span`
	text-transform: uppercase;
	font-size: 2.5rem;
	font-family: var(--fontfamily-header);
	font-weight: 700;
	letter-spacing: 4px;
	margin-bottom: 4rem;
	padding-bottom: 1rem;
	text-align: left;
	position: relative;
	align-self: flex-start;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 4px;
		width: 100%;
		border-radius: 10rem;
		background-color: var(--palette-primary);
	}
	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;
