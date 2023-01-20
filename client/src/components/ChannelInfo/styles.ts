import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  display: flex;
  grid-area: CI;
  padding: 0 17px;
  z-index: 2;

  > div i {
    color: var(--symbol);
    height: 24px;
    width: 24px;
  }
`;

export const Description = styled.span`
  color: var(--gray);
  font-size: 15px;
`;

export const Separator = styled.div`
  background-color: var(--white);
  height: 24px;
  margin: 0 13px;
  opacity: 0.2;
  width: 1px;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  margin-left: 9px;
`;