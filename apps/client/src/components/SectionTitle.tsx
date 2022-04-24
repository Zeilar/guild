import styled, { css } from "styled-components";

export const SectionTitle = styled.span`
	text-transform: uppercase;
	font-size: 3rem;
	${({ theme }) => css`
		font-family: ${theme.typography.header.fontFamily};
	`}
`;
