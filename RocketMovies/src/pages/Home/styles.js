import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    display: flex;
    justify-content: space-between;

    padding: 50px 123px;

    h1 {
      color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 8px;
      }

      width: 205px;
      height: 50px;

      border-radius: 8px;
      border: none;

      background-color: ${({ theme }) => theme.COLORS.YELLOW_400};
    }
  }

  section {
    padding: 0 123px;
  }
`;
