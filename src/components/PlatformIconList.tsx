import {FC} from 'react';
import { Icon} from "@chakra-ui/react";
import {FaWindows,FaPlaystation, FaXbox,FaApple,FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

import {IPlatform} from "../interfaces";

interface IProps {
    platform:IPlatform
}
const PlatformIconList:FC<IProps> = ({platform}) => {

    const {slug} = platform;

    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }

    return (
        <Icon as={iconMap[slug]} color={'gray.500'}/>
    );
};

export {PlatformIconList};