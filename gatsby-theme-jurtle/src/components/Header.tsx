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
`;

const Header: React.FC<Props> = ({ logo = 'Jurtle'}) => {
  return (
    <Container>
      <Typography variant="h6">
      {logo}
      </Typography>
    </Container>
  );
}

export default Header;
