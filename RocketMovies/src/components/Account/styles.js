import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    > section {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }
`;
