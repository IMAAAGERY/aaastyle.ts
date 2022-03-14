import { useEffect } from "react";

export const useClickOutside = (ref: any, callback: any) => {
	useEffect(() => {
		let startedInside = false;
		let startedWhenMounted = false;

		const listener = (event: any) => {
			// Do nothing if `mousedown` or `touchstart` started inside ref element
			if (startedInside || !startedWhenMounted) return;
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) return;

			callback(event);
		};

		const validateEventStart = (event: any) => {
			startedWhenMounted = ref.current;
			startedInside = ref.current && ref.current.contains(event.target);
		};

		document.addEventListener('mousedown', validateEventStart);
		document.addEventListener('touchstart', validateEventStart);
		document.addEventListener('click', listener);
		document.addEventListener('keyup', function (event) {
			if (event.key === 'Enter') {
				event.preventDefault();
				callback(event);
			}
		});

		return () => {
			document.removeEventListener('mousedown', validateEventStart);
			document.removeEventListener('touchstart', validateEventStart);
			document.removeEventListener('click', listener);
			document.removeEventListener('keyup', listener);
		};
	}, [ref, callback]);
};
