import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: #C0C0C0;
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: #FFB266;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  align-self: center;
`;

export const Carousel = styled(Slider)`
  .slick-slide{
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
  color: #202020;
  font-family: 'Roboto';
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: Roboto, sans-serif;
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  ${ModalTitle}
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;