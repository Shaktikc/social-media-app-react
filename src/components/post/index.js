import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box
        border="2px solid"
        borderColor="gray.100"
        borderRadius="md"
        shadow={"lg"}
        bg="gray.100"
        // mt="1.5rem"
      >
        <Header post={post} />

        <Box p="2" minH="20px">
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>

        <Actions post={post} />
      </Box>
    </Box>
  );
}
