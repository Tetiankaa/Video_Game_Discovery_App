import {useData} from "./useData";
import {IGenre} from "../interfaces";

const useGenres = () => useData<IGenre>('/genres');

export {useGenres}