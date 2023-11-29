import {FC} from 'react';
import {Heading} from "@chakra-ui/react";
import {IGameQuery} from "../interfaces/GameQuery";

interface IProps {
    gameQuery: IGameQuery
}

const GameHeading: FC<IProps> = ({gameQuery}) => {
    return (
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
            {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
        </Heading>
    );
};

export {GameHeading};