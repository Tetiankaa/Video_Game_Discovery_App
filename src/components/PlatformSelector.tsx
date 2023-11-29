import React, {Dispatch, FC, SetStateAction} from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";

import {usePlatforms} from "../hooks";
import {IPlatform} from "../interfaces";

interface IProps {
    onSelectPlatform:(platform:IPlatform)=>void;
    selectedPlatform:IPlatform | null;
}
const PlatformSelector:FC<IProps> = ({onSelectPlatform,selectedPlatform}) => {

    const {data,error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>{selectedPlatform ? `${selectedPlatform?.name}` : 'Platforms'}</MenuButton>
            <MenuList>
                {data.map(platform=><MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export {PlatformSelector};