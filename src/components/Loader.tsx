import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const LoaderStyles = createGlobalStyle`
  .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 17px;
    background-color: black;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
  }
`

const Container = styled.div`
  margin: 200px auto;
`

export default function Loader() {
  return (
    <Container>
      <LoaderStyles />
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </Container>
  )
}
