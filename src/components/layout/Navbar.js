import { Button, Flex, HStack, Link } from "@chakra-ui/react";
import { DASHBOARD, PROTECTED, USERS } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useAuth, useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  const { user, isLoading: userLoading } = useAuth();
  if (isLoading || userLoading) return "Loading...";

  return (
    <Flex
      pos="fixed"
      width="full"
      height="16"
      zIndex="3"
      justify="center"
      bg="gray.100"
      shadow="md"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <HStack gap="2rem">
          {" "}
          <Link
            as={RouterLink}
            to={DASHBOARD}
            // fontWeight="bold"
            color="green"
            fontSize={"xl"}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to={`${PROTECTED}/profile/${user.id}`}
            // fontWeight="bold"
            color="green"
            fontSize={"xl"}
          >
            My Profile
          </Link>
          <Link
            as={RouterLink}
            to={USERS}
            // fontWeight="bold"
            color="green"
            fontSize={"xl"}
          >
            All Users
          </Link>
        </HStack>

        <Button
          ml="auto"
          colorScheme="yellow"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
          shadow="sm"
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
