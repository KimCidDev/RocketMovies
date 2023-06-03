import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 116px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid black;

  input {
    width: 630px;
    height: 56px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_600};
  }

  > img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }
`;
