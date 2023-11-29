import {IPlatform} from "./PlatformInterface";

export interface IGame {
    id:number,
    name:string,
    background_image:string
    parent_platforms: {platform:IPlatform}[],
    metacritic:number,
    rating_top:number
}