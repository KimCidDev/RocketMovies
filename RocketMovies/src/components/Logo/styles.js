import styled from 'styled-components';

export const Container = styled.div`
  #logo {
    font-family: 'Geologica', sans-serif;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.COLORS.YELLOW_500};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
