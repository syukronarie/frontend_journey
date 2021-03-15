import { AxiosPromise } from "axios";
import CustomAxios from "src/utils/libs/Axios";

const no = null;

export function GetAllDataImage(): AxiosPromise {
	return CustomAxios.get(`/flickr`);
}

export function GetAllDataImageByTags(tags: string): AxiosPromise {
	return CustomAxios.get(`/flickr?search=${escape(tags)}`);
}

export default no;
