import * as React from 'react';
import styled from 'styled-components';
import {ReactNode} from "react";

interface Props {
  children: ReactNode
}

const Container = styled.header`
  height: 60px;
`;
const Header: React.FC<Props> = ({ children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Header;
