import { useState, useEffect, Component } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieScreen from "../components/Movie";
import Detail from "./Detail";

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;
const MovieBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    setMovies(response.data.data.movies);

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      {loading ? (
        <Load>
          <span>Loading...</span>
        </Load>
      ) : (
        <MovieBox>
          {movies?.map(movie => {
            return (
              <div>
                <MovieScreen
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  coverimg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              </div>
            );
          })}
        </MovieBox>
      )}
    </Container>
  );
}

export default Home;
