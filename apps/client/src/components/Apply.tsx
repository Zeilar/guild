import styled from "styled-components";
import parallaxBg from "../assets/images/parallax-bg.jpg";
import { ReactComponent as ArrowRight } from "../assets/svgs/arrow-right.svg";

const Wrapper = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	background-image: url(${parallaxBg});
	background-position: center;
	background-size: cover;
	align-items: center;
	height: 100%;
	transform-style: preserve-3d;
	z-index: -1;
	transform: translateZ(calc(-1 * var(--perspective))) scale(2);
	box-shadow: 0 0 0 100vmax inset rgba(0, 0, 0, 0.65);
	padding: 1rem;
`;

const ArrowRightWrapper = styled(ArrowRight)`
	width: var(--size);
	fill: var(--color);
	transition: inherit;
	width: 0;
`;

const Link = styled.a`
	--size: 3rem;
	--color: var(--palette-text);
	transition: 0.25s;
	display: flex;
	font-family: var(--fontfamily-brand);
	color: var(--color);
	text-transform: uppercase;
	text-decoration: none;
	font-size: var(--size);
	&:hover {
		--color: var(--palette-primary);
		${ArrowRightWrapper} {
			margin-left: 1rem;
			width: var(--size);
		}
	}
	@media (max-width: 768px) {
		--size: 2rem;
	}
`;

export function Apply() {
	return (
		<Wrapper>
			<Link target="_blank" href={process.env.REACT_APP_APPLY_URL}>
				Apply Now
				<ArrowRightWrapper />
			</Link>
		</Wrapper>
	);
}
