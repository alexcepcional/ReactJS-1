import { Flex } from "@chakra-ui/react"

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      fontSize={"2rem"}
    >
      {greeting}
    </Flex>
  )
}

export default ItemListContainer
