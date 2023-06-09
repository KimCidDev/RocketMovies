import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: left;

    margin: 40px 123px;
    overflow-y: auto;

    .nameRating {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: 24px;
      gap: 15px;
      h1 {
        font-size: 36px;
      }
    }

    .databaseInfo {
      display: flex;
      flex-direction: row;

      margin-top: 24px;
      gap: 8px;

      span {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      img {
        height: 12px;
        width: 12px;
        border-radius: 50%;
      }
    }

    .tags {
      margin: 40px 0;
    }

    p {
      padding-bottom: 20px;
      text-align: justify;
    }
  }
`;
