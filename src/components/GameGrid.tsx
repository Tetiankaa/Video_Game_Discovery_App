import React, {FC} from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";

import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {useGames} from "../hooks/useGames";
import {IGameQuery} from "../interfaces/GameQuery";

interface IProps {
    gameQuery:IGameQuery | null
}
const GameGrid:FC<IProps> = ({gameQuery}) => {

   const {loading,error,data} = useGames(gameQuery);

    const skeletons = [1,2,3,4,5,6];

    return (
        <div>
            {error && <Text>{error}</Text>}

            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} padding={'10px'}>
                {loading && skeletons.map(skeleton=>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}

                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </div>
    );
};

export {GameGrid};