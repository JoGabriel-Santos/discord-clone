import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  display: flex;
  grid-area: UI;
  justify-content: space-between;
  padding: 10px;

  > div .mic, .headphone, .options {
    color: var(--white);
    cursor: pointer;
    height: 20px;
    opacity: 0.7;
    transition: opacity 0.2s;
    width: 20px;
  }
`;

export const Avatar = styled.div`
  background-color: var(--gray);
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const Icons = styled.div`
  align-items: center;
  display: flex;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > span {
    color: var(--gray);
    font-size: 13px;
  }

  > strong {
    color: var(--white);
    display: block;
    font-size: 13px;
  }
`;