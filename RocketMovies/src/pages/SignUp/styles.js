import styled from 'styled-components';
import SignUpInBackground from '../../assets/purple_quartz.jpg';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  height: 100vh;
  background: url(${SignUpInBackground}) no-repeat center center;
  background-size: cover;
`;

export const Form = styled.form`
  max-width: 637px;
  padding: 48px 120px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  text-align: left;

  > div:first-child > h1 {
    font-size: 48px;
  }

  > button {
    font-size: 16px;
    margin-top: 24px;
    align-self: center;
  }

  button span {
    font-size: 16px;
    align-self: center;
  }

  > h3 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};
  }
`;
