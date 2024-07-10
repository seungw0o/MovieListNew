import { Link, useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HomeBtn = styled.button`
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25);
  background-color: white;
  width: fit-content;
  height: 25px;
  cursor: pointer;
  border-radius: 200px;
`;
const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;
const MovieImg = styled.img`
  top: -50px;
  margin: 10px 10px 10px 80px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MovieTitle = styled.h2`
  margin: 10px 10px 10px 80px;
  font-weight: 300;
  text-decoration: none;
`;

function Detail({ title, large_cover_image }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDetails = async () => {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    setDetails(response.data.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  const goHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>
        <HomeBtn onClick={goHome}>Go Home</HomeBtn>
      </div>
      {loading ? (
        <Load>
          <span>Loading...</span>
        </Load>
      ) : (
        <div>
          <MovieTitle>{details.title}</MovieTitle>
          <MovieImg src={details.medium_cover_image}></MovieImg>
        </div>
      )}
    </div>
  );
}

export default Detail;
