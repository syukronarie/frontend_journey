// import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		primaryColor: string;
		secondaryColor: string;
	}
}

export const lightTheme = {
	primaryColor: "#333",
	secondaryColor: "#666",
};

export const darkTheme = {
	primaryColor: "#fff",
	secondaryColor: "#cacaca",
};
