import {useData} from "./useData";
import {IPlatform} from "../interfaces";

const usePlatforms = ()=>useData<IPlatform>('/platforms/lists/parents');

export {usePlatforms}