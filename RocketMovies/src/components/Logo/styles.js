import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-family: 'Geologica', sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.COLORS.YELLOW_600};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
