import React from "react";
import tw, { styled } from "twin.macro";
import ModalContext from "./ModalContext";

const Slide = tw.div`font-wild relative w-full h-screen flex flex-col items-center justify-center`;

const Background = styled.video`
  ${tw`absolute top-0 left-0 object-cover w-full h-full z-behind`}
  filter: brightness(0.6);
`;

const Title = tw.h2`text-4xl sm:text-6xl md:text-8xl text-center text-white px-16 md:px-32`;

const Subtitle = tw.button`text-primary font-bold text-base sm:text-xl font-mont tracking-wide`;

const HeroSlide = ({ title, video, url }) => {
  return (
    <Slide>
      <Title>{title}</Title>
      {!!url && (
        <ModalContext.Consumer>
          {(modal) => (
            <Subtitle onClick={() => modal.openModal(url)}>WATCH NOW</Subtitle>
          )}
        </ModalContext.Consumer>
      )}
      {!!video && (
        <Background autoPlay playsInline muted loop>
          <source src={video.publicURL} type="video/mp4" />
        </Background>
      )}
    </Slide>
  );
};

export default HeroSlide;
