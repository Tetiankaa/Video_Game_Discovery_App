import React, {useState} from 'react';
import {Box, Grid, GridItem, Heading, HStack, Show} from "@chakra-ui/react";

import {GameGrid, GameHeading, GenreList, NavBar, PlatformSelector, SortSelector} from "./components";
import {IGameQuery} from "./interfaces/GameQuery";


function App() {
    const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

    return (
     <Grid templateAreas={{
         base:`"nav" "main"`,
         lg:`"nav nav" "aside main"`
     }}
     templateColumns={{
         base:'1fr',
         lg:`200px 1fr`
     }}
     >
         <GridItem area={'nav'}><NavBar onSearch={(search)=>setGameQuery({...gameQuery,search})}/>
         </GridItem>

         <Show above='lg'>
             <GridItem area={'aside'} paddingX={5}><GenreList onSelectGenre={(genre)=>setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/></GridItem>
         </Show>

         <GridItem area={'main'}>
             <Box paddingLeft={2}>
                 <GameHeading gameQuery={gameQuery}/>

                 <HStack spacing={5} marginBottom={5}>
                     <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                                       selectedPlatform={gameQuery.platform}/>
                     <SortSelector onSelectSort={(ordering) => setGameQuery({...gameQuery, ordering})}
                                   selectedOrdering={gameQuery.ordering}/>
                 </HStack>
             </Box>


             <GameGrid gameQuery={gameQuery}/>
         </GridItem>

     </Grid>
    );
}

export default App;