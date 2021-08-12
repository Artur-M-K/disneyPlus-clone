import React from 'react';
import styled from 'styled-components';

const Viewers = () => {

    return ( 
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video src="/videos/disney.mp4"  autoPlay='true' loop muted playsinline></video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video src="/videos/marvel.mp4"  autoPlay='true' loop muted></video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video src="/videos/national-geographic.mp4"  autoPlay='true' loop muted></video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video src="/videos/pixar.mp4"  autoPlay='true' loop muted></video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video src="/videos/star-wars.mp4"  autoPlay='true' loop muted></video>
            </Wrap>
        </Container>
     );
}
 
export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
`
const Wrap = styled.div`
    position: relative;
    cursor: pointer;
    border: 3px solid rgba(249,249,249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all .3s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249,249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        img {
            opacity: 0;
        }

        video {
            opacity: 1;
        }
    }
    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        opacity: 0;
        border-radius: 8px;
    }
`