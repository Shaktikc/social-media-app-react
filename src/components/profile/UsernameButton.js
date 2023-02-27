import { Button } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function UsernameButton({ user }) {
  return (
    <Button
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      color="green"
      variant="link"
      fontSize={"lg"}
    >
      <b>{user.username}</b>
    </Button>
  );
}
