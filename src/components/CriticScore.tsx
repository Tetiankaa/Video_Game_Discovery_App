import {FC} from 'react';
import {Badge} from "@chakra-ui/react";
interface IProps {
    score:number
}
const CriticScore:FC<IProps> = ({score}) => {
    let color = score>75 ? 'green' : score>60 ? 'yellow' : 'red'

    return (
         <Badge fontSize='14px' paddingX={2} borderRadius={'4px'} colorScheme={color}>{score}</Badge>
    );
};

export {CriticScore};