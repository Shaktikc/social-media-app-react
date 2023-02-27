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
          if (index === 0) {
            return (
              <ScaleFade initialScale={0.9} in={delay}>
                <Box mt="1rem" mb="-0.5rem">
                  {" "}
                  <Post key={post.id} post={post} />;
                </Box>
              </ScaleFade>
            );
          } else {
            return <Post key={post.id} post={post} />;
          }
        })
      )}
    </Box>
  );
}
