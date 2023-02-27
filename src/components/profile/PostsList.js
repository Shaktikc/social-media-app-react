import { Box, Text, ScaleFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Post from "../post/index";

export default function PostsList({ posts, delay }) {
  return (
    <Box px="4" align="center">
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          No posts yet.
        </Text>
      ) : (
        posts?.map((post, index) => {
          return <Post key={post.id} post={post} />;
        })
      )}
    </Box>
  );
}
