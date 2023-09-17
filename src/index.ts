import { parse, stringify } from "qs";
import { useEffect, useState } from "react";

const win = window || null;

export const useStateQuery = <T extends boolean>(
	key: string,
	initialValue?: T extends true ? string[] : string,
) => {
	const [value, setValue] = useState<
		(T extends true ? string[] : string) | undefined
	>(initialValue);

	useEffect(() => {
		const handler = () => {
			const query = parse(win?.location?.search || "", {
				ignoreQueryPrefix: true,
			});
			if (query[key])
				setValue(
					() => query[key] as T extends true ? string[] : string,
				);
		};

		handler();

		win?.addEventListener("popstate", handler);

		return () => win?.removeEventListener("popstate", handler);
	}, []);

	useEffect(() => {
		const query = parse(win?.location?.search || "", {
			ignoreQueryPrefix: true,
		});

		if (value) {
			query[key] = value;
		} else {
			delete query[key];
		}

		const search = stringify(query);

		const url = `${win?.location?.pathname || ""}${
			search ? `?${search}` : ""
		}`;

		win?.history?.pushState({ path: url }, "", url);
	}, [value]);

	return [value, setValue];
};
