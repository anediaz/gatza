import React from "react";
import styled from "styled-components";

import { berriak } from "../data/data";

const Wrapper = styled.div`
  background-color: black;
`;

const Header = styled.div`
  margin-top: 0.2rem;
  height: 1rem;
`;

const VideoDisplayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 70%;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ClickableList = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
  padding: calc(0.1rem + 2px) 0;
  width: 65%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: calc(33% - 2px);
  height: calc(33% - 2px);
  border: solid 1px black;
  &:hover {
    cursor: pointer;
  }
  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    margin-bottom: 0.2rem;
  }
`;

const Berriak = () => {
  const openImg = src => window.open(src, "_blank");

  return (
    <Wrapper>
      <Header />
      <VideoDisplayer>
        <iframe
          src={berriak.videoUrl}
          frameBorder="0"
          allowFullScreen
          title="videoDisplayer"
        ></iframe>
      </VideoDisplayer>
      <ClickableList>
        <Content>
          {berriak.albisteak.map((item, index) => (
            <Img
              src={`${process.env.PUBLIC_URL}/${item.img}`}
              key={index}
              onClick={() => openImg(item.src)}
              alt=""
            />
          ))}
        </Content>
      </ClickableList>
    </Wrapper>
  );
};

export default Berriak;
