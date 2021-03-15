import { useEffect, useState } from "react";

const useDebounce = (value: any, delayMs: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delayMs);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delayMs]);

	return debouncedValue;
};

export default useDebounce;
