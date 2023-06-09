import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  div:first-child {
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > button span {
    font-size: 16px;
  }

  > h1 {
    font-size: 30px;
  }

  > div:nth-child(3) {
    display: flex;
    gap: 40px;
    margin: 20px 0;
  }

  > footer {
    display: flex;
    gap: 40px;
  }

  > footer button {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  > section {
    display: flex;
    justify-content: left;
    align-items: center;

    height: 60px;

    border-radius: 10px;

    padding-left: 15px;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_900};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 230px;

  border: none;
  border-radius: 10px;
  resize: none;

  padding: 12px;
  margin-bottom: 30px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_700};

  color: ${({ theme }) => theme.COLORS.YELLOW_600};
  font-weight: bold;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const NewTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  min-width: 100px;

  padding: 0 16px;
  gap: 16px;

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.DIRTY_WHITE};
  background: ${({ theme }) => theme.COLORS.PURPLE_400} no-repeat center center;
`;
