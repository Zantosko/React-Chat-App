import React from 'react';
import { Wrapper } from './styled-components/GlobalStyles';
import { SubWrapper, Image } from './styled-components/ErrorPageStyles';
import ErrorPic from '../assets/404-pic.jpg';
import { Button } from './styled-components/HomeStyles'
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Wrapper>
      <SubWrapper>
        <Image src={ErrorPic} alt=""/>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </SubWrapper>
    </Wrapper>
  )
}
