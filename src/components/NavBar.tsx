import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/logo.webp';
import {ColorModeSwitch} from "./ColorModeSwitch";
import {SearchInput} from "./SearchInput";
import {FC} from "react";

interface IProps{
    onSearch:(searchText:string)=>void;
}
const NavBar:FC<IProps> = ({onSearch}) => {
    return (
     <HStack padding={'11px'}>
         <Image src={logo} boxSize={'60px'}/>
         <SearchInput onSearch={onSearch}/>
         <ColorModeSwitch/>
     </HStack>
    );
};

export {NavBar};