import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 220px;

  border: none;
  border-radius: 16px;

  margin: 0 auto;
  margin-bottom: 24px;

  padding: 32px;

  color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};
  background-color: ${({ theme }) => theme.COLORS.PURPLE_700};
`;
