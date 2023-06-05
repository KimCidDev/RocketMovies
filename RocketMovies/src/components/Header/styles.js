import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;

  padding: 0 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PURPLE_700};

  input {
    width: 630px;
    height: 46px;

    border-radius: 10px;
    border: none;

    padding: 0 24px;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_700};

    color: ${({ theme }) => theme.COLORS.YELLOW_600};
  }
`;

export const Profile = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: center;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.DIRTY_YELLOW};
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};
    }
  }

  img {
    height: 64px;
    width: 64px;

    margin-left: 9px;
    border-radius: 50%;
  }
`;
