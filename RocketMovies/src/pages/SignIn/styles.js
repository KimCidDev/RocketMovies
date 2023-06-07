import styled from 'styled-components';
import { Logo } from '../../components/Logo';

export const Container = styled.div``;

// Still not working, still don't know why
export const BiggerLogo = styled(Logo)`
  h1 {
    font-size: 60px;
  }
`;
