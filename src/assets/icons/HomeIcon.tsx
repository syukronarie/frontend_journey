import * as React from "react";

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 48 48"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}>
			<path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
		</svg>
	);
}

export default HomeIcon;
