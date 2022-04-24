import { Guild } from "@apps/client/types/guild";
import { useMemo } from "react";
import styled, { css, Keyframes, keyframes } from "styled-components";
import { STRAPI_URL } from "../utils/url";

const ANIMATION_PRESENTATION_DURATION = 3000;
const ANIMATION_CROSSFADE_DURATION = 3000;

function crossfadeKeyframes(n: number, total: number) {
	return keyframes`
        0% {
            opacity: 1;
        }
        ${(ANIMATION_PRESENTATION_DURATION / total) * 100}% {
            opacity: 1;
        }
        ${(1 / n) * 100}% {
            opacity: 0;
        }
        ${100 - (ANIMATION_CROSSFADE_DURATION / total) * 100}% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;
}

interface GalleryImageProps {
	delay: number;
	duration: number;
	keyframes: Keyframes;
}

const GalleryImage = styled.img<GalleryImageProps>(
	({ delay, duration, keyframes }) => css`
		z-index: -1;
		inset: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		animation: ${keyframes} infinite;
		animation-duration: ${duration}ms;
		animation-delay: ${delay}ms;
	`
);

interface GalleryProps {
	images: Guild["gallery"];
}

export function Gallery({ images }: GalleryProps) {
	const duration =
		(ANIMATION_PRESENTATION_DURATION + ANIMATION_CROSSFADE_DURATION) *
		images.length;
	const keyframes = useMemo(
		() => crossfadeKeyframes(images.length, duration),
		[images.length, duration]
	);
	return (
		<>
			{images
				.map((image, i) => (
					<GalleryImage
						key={image.id}
						alt={image.alternativeText}
						src={`${STRAPI_URL}${image.url}`}
						duration={duration}
						keyframes={keyframes}
						delay={
							(ANIMATION_PRESENTATION_DURATION +
								ANIMATION_CROSSFADE_DURATION) *
							i
						}
					/>
				))
				.reverse()}
		</>
	);
}
