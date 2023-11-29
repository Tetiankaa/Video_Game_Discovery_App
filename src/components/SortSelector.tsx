import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import {FC} from "react";

interface IProps {
    onSelectSort:(ordering:string)=>void;
    selectedOrdering:string | null;
}
const SortSelector:FC<IProps> = ({onSelectSort,selectedOrdering}) => {

    const sortOrders = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'},
    ];

    const currentOrdering = sortOrders.find(order=>order.value === selectedOrdering);
    return (
       <Menu>
           <MenuButton as={Button} rightIcon={<BiChevronDown />}>Order by: {currentOrdering?.label || 'Relevance'}</MenuButton>
           <MenuList>
               {sortOrders.map(sort=><MenuItem key={sort.value} value={sort.value} onClick={()=>onSelectSort(sort.value)}>{sort.label}</MenuItem>)}
           </MenuList>
       </Menu>
    );
};

export {SortSelector};