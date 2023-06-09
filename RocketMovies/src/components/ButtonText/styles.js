import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};

  > span {
    font-size: 16px;
    margin-left: 8px;
  }
`;
