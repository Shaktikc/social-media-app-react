import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

export default function NewPost({ setDelay }) {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    setDelay(false);
    reset();
  }

  return (
    <Box
      maxW="585px"
      mx="auto"
      p="10"
      bg="gray.200"
      shadow={"md"}
      borderRadius="10"
    >
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="yellow"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minRows={3}
          {...register("text", { required: true })}
          borderWidth={"2px"}
          borderColor="blackAlpha.500"
        />
      </form>
    </Box>
  );
}
