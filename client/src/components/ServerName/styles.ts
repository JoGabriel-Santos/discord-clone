import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0 11px 0 16px;
  z-index: 2;
  
  > div i {
    color: var(--white);
    cursor: pointer;
    height: 28px;
    width: 28px;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;