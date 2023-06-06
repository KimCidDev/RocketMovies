import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_700};
  color: ${({ theme }) => theme.COLORS.YELLOW_600};

  svg {
      margin-left: 12px;
    }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    border: none;
    background-color: transparent;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_700};

    color: ${({ theme }) => theme.COLORS.YELLOW_600};

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
