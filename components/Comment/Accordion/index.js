import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import CommentForm from "components/Form/Comment";
import useAuth from "hooks/useAuth";
import Link from "next/link";
import CommentItem from "../Item";

export default function CommentSection({ comments }) {
  const { userValues } = useAuth();

  return (
    <Accordion marginTop="30px" allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Leave a comment
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {userValues?.user ? (
            <CommentForm />
          ) : (
            <Text>
              You must be logged in to comment.{" "}
              <span style={{ color: "purple" }}>
                {" "}
                <Link href="/auth">Sign up</Link>
              </span>
            </Text>
          )}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Comments
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <>
                  <CommentItem {...comment} />
                </>
              );
            })
          ) : (
            <Text color="purple">There is no comments yet!</Text>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
