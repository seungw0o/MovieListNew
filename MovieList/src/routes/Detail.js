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
      <HomeBtn onClick={goHome}>Go Home</HomeBtn>
      {loading ? (
        <Load>
          <span>Loading...</span>
        </Load>
      ) : (
        <h1>hi</h1>
      )}
      ;
    </div>
  );
}

export default Detail;
