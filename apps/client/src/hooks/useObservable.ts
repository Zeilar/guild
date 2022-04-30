import { useEffect, useRef } from "react";
import { useOnUnmount } from "use-ful-hooks-ts";

export interface UseObservableOptions {
	unobserveOnIntersection?: boolean;
	root?: IntersectionObserverInit["root"];
	rootMargin?: IntersectionObserverInit["rootMargin"];
	threshold?: IntersectionObserverInit["threshold"];
}

export function useObservable<T extends HTMLElement = HTMLDivElement>(
	callback: (element: Element) => void,
	options: UseObservableOptions = {}
) {
	const {
		unobserveOnIntersection,
		root,
		rootMargin,
		threshold = 0,
	} = options;
	const ref = useRef<T>(null);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		const element = ref.current;
		if (!element) {
			return;
		}
		observer.current = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						callback(entry.target);
						if (unobserveOnIntersection) {
							observer.current?.unobserve(entry.target);
						}
					}
				});
			},
			{ threshold, root, rootMargin }
		);
		observer.current.observe(element);
	}, [root, rootMargin, threshold, unobserveOnIntersection, callback]);

	useOnUnmount(() => {
		if (observer.current && ref.current) {
			observer.current.unobserve(ref.current);
		}
	});

	return ref;
}
