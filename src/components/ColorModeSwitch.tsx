import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
    return (
      <HStack>
          <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme={'teal'} size={'lg'}/>
          <Text whiteSpace={'nowrap'}>Dark mode</Text>
      </HStack>
    );
};

export {ColorModeSwitch};