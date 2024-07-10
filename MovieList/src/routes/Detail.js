import { Link, useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";

const HomeBtn = styled.button`
  background-color: white;
  width: fit-content;
  height: 25px;
  cursor: pointer;
`;

function Detail({ title, large_cover_image }) {
  const navigate = useNavigate();
  // const param = useParams();
  const goHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <HomeBtn onClick={goHome}></HomeBtn>
    </div>
  );
}

export default Detail;
