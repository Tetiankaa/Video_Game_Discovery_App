import {FC} from 'react';
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";

import {IGame} from "../interfaces";
import {PlatformIconList} from "./PlatformIconList";
import {CriticScore} from "./CriticScore";
import {imageService} from "../services";
import {Emoji} from "./Emoji";


interface IProps{
    game:IGame
}
const GameCard:FC<IProps> = ({game}) => {
    const {name,background_image,parent_platforms, metacritic,rating_top} = game;

    return (
        <Card>
            <Image src={imageService.getCroppedImageUrl(background_image)}/>

            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <HStack marginY={'10px'}>
                        {parent_platforms.map(({platform}) => <PlatformIconList key={platform.id} platform={platform}/>)}
                    </HStack>
                    <CriticScore score={metacritic}/>
                </HStack>

                <Heading fontSize={'2xl'}>{name} <Emoji rating={rating_top}/></Heading>

            </CardBody>
        </Card>
    );
};

export {GameCard};