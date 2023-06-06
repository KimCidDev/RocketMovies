import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border-radius: 10px;
  border: none;

  margin-top: 24px;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_400};
`;
