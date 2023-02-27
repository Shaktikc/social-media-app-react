import { usePosts } from "hooks/posts";
import PostsLists from "components/Dashboard/PostsList";
import NewPost from "../../components/Dashboard/NewPost";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { posts, isLoading } = usePosts();
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (posts?.length >= 0) setDelay(true);
  }, [posts?.length]);

  // console.log("delay", delay);
  if (isLoading) return "Loading posts...";

  return (
    <Box bg="gray.100" p="2rem">
      <NewPost setDelay={setDelay} />
      <PostsLists posts={posts} delay={delay} />
    </Box>
  );
}
