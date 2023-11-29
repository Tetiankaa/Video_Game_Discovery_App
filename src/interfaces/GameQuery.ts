import {IGenre} from "./GenreInterface";
import {IPlatform} from "./PlatformInterface";

export interface IGameQuery {
    genre:IGenre | null;
    platform:IPlatform | null;
    ordering:string | null;
    search:string;
}