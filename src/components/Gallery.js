import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../components/Loader";
import Ligthbox from "./Lightbox";

const propTypes = {
  photos: PropTypes.array,
  photoInfos: PropTypes.shape({
    default: PropTypes.string.isRequired,
    big: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

const Wrapper = styled.div`
  margin-top: 0.2rem;
  display: grid;
  justify-items: center;
  align-items: stretch;
  @media (min-width: 1025px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Item = styled.div`
  text-align: center;
  margin: 0 2px;
  background-color: white;
  width: 100%;
  img {
    width: calc(100% - 4px);
    padding: auto;
    object-fit: cover;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const Gallery = ({ photos, photoInfos }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const closeLightbox = () => setSelectedImgIndex(null);
  const next = () =>
    selectedImgIndex < photos.length
      ? setSelectedImgIndex(selectedImgIndex + 1)
      : null;
  const prev = () =>
    selectedImgIndex > 0 ? setSelectedImgIndex(selectedImgIndex - 1) : null;
  const displayLightbox = index =>
    index !== null && photos.length >= index && photos[index]
      ? photos[index][photoInfos.big]
      : null;

  return (
    <Wrapper>
      {photos.length ? (
        <Fragment>
          {photos.map((p, index) => (
            <Item key={index} onClick={() => setSelectedImgIndex(index)}>
              <img src={p[photoInfos.default]} alt="" />
            </Item>
          ))}
          <Ligthbox
            img={displayLightbox(selectedImgIndex)}
            onClose={closeLightbox}
            onNext={photos.length - 1 > selectedImgIndex ? next : null}
            onPrev={selectedImgIndex > 0 ? prev : null}
          />
        </Fragment>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

Gallery.propTypes = propTypes;

export default Gallery;
export { Wrapper };
