import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Movie from "../components/Movie";
//import MovieResults from "../components/MovieResults";

// function ShowMovies(props) {
//   const movieItems = props.movies.map((movie) => (
//     <li key={movie.id}>{movie.title}</li>
//   ));

//   return <>{movieItems}</>;
// }

export default function Home() {
  const [searchBar, setBar] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchBar = (event) => setBar(event.target.value);

  const searchMovie = async () => {
    if (searchBar) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=afc40d07fa1e3ddaf8283fcad53b1790&language=en-US&query=${searchBar}&page=1&include_adult=false`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const google = () => {
    fetch("hedhhed")
      .then((x) => s)
      .catch((e) => e);
  };

  return (
    <Box py={6}>
      <Head>
        <title>Movie Poster Search</title>
        <meta name="description" content="Search and download Movie posters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        bg="cyan.300"
        boxShadow="lg"
        width="80%"
        mx="auto"
        p={6}
        direction="column"
        alignItems="flex-start"
        borderRadius={5}
      >
        <Heading my={2}>Movie Poster Search</Heading>
        <FormControl borderRadius={5} mb={2}>
          <FormLabel
            color="gray.900"
            fontWeight="bold"
            fontSize="md"
            mb={2}
            as="legend"
          >
            Search and download movie poster
          </FormLabel>
          <Input
            placeholder="type here"
            variant="filled"
            type="text"
            width="auto"
            value={searchBar}
            onChange={handleSearchBar}
            bg="gray.800"
            color="gray.100"
          />
          <Button
            type="submit"
            variant="solid"
            mx={2}
            bg="cyan.500"
            colorScheme="cyan"
            boxShadow="base"
            onClick={searchMovie}
            color="white"
          >
            Submit
          </Button>
          <FormHelperText>Search by name of the movie</FormHelperText>
        </FormControl>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

// <ShowMovies movies={movies} />
