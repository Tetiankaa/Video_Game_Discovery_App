import {Box} from "@chakra-ui/react";
import {FC, ReactNode} from "react";

interface IProps{
    children:ReactNode
}
const GameCardContainer:FC<IProps> = ({children}) => {
    return (
    <Box  borderRadius={10} overflow={'hidden'}>
        {children}
    </Box>
    );
};

export {GameCardContainer};