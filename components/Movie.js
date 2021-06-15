import { GridItem, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

const imagesbaseurl = "https://image.tmdb.org/t/p/w500";

function Movie({ movie }) {
  return (
    <GridItem bg="gray.800" borderRadius={5}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        py={3}
      >
        <Text fontSize="md" color="gray.100" fontWeight="bold" m={5}>
          {movie.title}
        </Text>
        <Image
          src={`${imagesbaseurl}${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
          width="500"
          height="750"
        />
        <Button variant="outline" size="sm" color="gray.200" my={2}>
          <a href={`${imagesbaseurl}${movie.poster_path}`} download="">
            Download Poster
          </a>
        </Button>
      </Flex>
    </GridItem>
  );
}

export default Movie;
