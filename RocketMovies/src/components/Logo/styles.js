import styled from 'styled-components';

export const Container = styled.div`
  #logo {
    font-family: 'Geologica', sans-serif;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.COLORS.YELLOW_500};
  }
`;
