import {useData} from "./useData";
import {IGame} from "../interfaces";
import {IGameQuery} from "../interfaces/GameQuery";

const useGames = (gameQuery:IGameQuery | null) => useData<IGame>('/games',
    {params:
            {genres:gameQuery?.genre?.id,
            platforms:gameQuery?.platform?.id,
            ordering:gameQuery?.ordering,
            search:gameQuery?.search
            }},
    [gameQuery]);

export {useGames}