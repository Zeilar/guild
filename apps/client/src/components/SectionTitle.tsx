import styled from "styled-components";

export const SectionTitle = styled.span`
	text-transform: uppercase;
	font-size: 2.5rem;
	font-family: var(--fontfamily-header);
	font-weight: 700;
	letter-spacing: 4px;
	margin-bottom: 4rem;
	text-align: left;
	position: relative;
	align-self: flex-start;
	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;
