import React, {FC} from 'react';
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";

import {useGenres} from "../hooks";
import {imageService} from "../services";
import {IGenre} from "../interfaces";

interface IProps{
    onSelectGenre:(genre:IGenre)=>void;
    selectedGenre:IGenre | null;
}
const GenreList:FC<IProps> = ({onSelectGenre,selectedGenre}) => {
   const {loading,error,data} = useGenres();

   if (loading) return <Spinner/>;
   if (error) return null;

    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
            {data.map(genre => <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                    <Image boxSize={'32px'} borderRadius={8} objectFit={'cover'}
                           src={imageService.getCroppedImageUrl(genre.image_background)}/>
                    <Button whiteSpace={'normal'} textAlign={'left'}
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize={'lg'}
                            variant={'link'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List></>
    );
};

export {GenreList};