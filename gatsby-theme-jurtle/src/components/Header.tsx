import * as React from 'react';
import styled from 'styled-components';
import {ReactNode} from "react";
import Typography from '@material-ui/core/Typography';

interface Props {
  children: ReactNode
  logo?: string;
}

const Container = styled.header`
  height: 60px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  background-color: #004680;
`;

const Logo = styled(Typography)`
  color: white;
`;

const Header: React.FC<Props> = ({ logo = 'Jurtle'}) => {
  return (
    <Container>
      <Logo variant="h6">
      {logo}
      </Logo>
    </Container>
  );
}

export default Header;
