import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons'

  import CartWidget from '../CartWidget/CartWidget'
   
  export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Acá va un logo</Box>
   
            <Flex alignItems={'center'}>
                <CartWidget />
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
   
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Este es tu nombre</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Un botón</MenuItem>
                    <MenuItem>Otro botón</MenuItem>
                    <MenuItem>Y otro botón</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    )
  }