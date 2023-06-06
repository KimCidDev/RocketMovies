import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};

    display: flex;
    align-items: center;

    padding: 0 123px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto;

  > div:nth-child(4) {
    margin-top: 16px;
  }

  > button {
    height: 56px;
    width: 100%;

    margin-top: 24px;

    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_400};
    font-size: 16px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -122px auto 32px;

  height: 186px;
  width: 186px;

  > img {
    height: 186px;
    width: 186px;

    border-radius: 50%;
  }

  > label {
    height: 48px;
    width: 48px;

    background-color: ${({ theme }) => theme.COLORS.DIRTY_YELLOW};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PURPLE_600};
    }
  }
`;
