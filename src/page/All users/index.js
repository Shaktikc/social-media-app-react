import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "hooks/users";
import { useEffect } from "react";
import User from "../../components/ALL users/User";

export default function Users() {
  const { users, isLoading } = useUsers();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return "Loading...";

  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
}
