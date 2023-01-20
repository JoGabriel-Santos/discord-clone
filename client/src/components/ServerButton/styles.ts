import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  align-items: center;
  background-color: ${(props) => props.isHome ? 'var(--home)' : 'var(--primary)'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 48px;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  transition: background-color 0.2s, border-radius 0.2s;
  width: 48px;

  > img {
    height: 24px;
    width: 24px;
  }

  &::before {
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    height: 9px;
    left: -17px;
    position: absolute;
    top: calc(50% - 4.5px);
    width: 9px;
  }

  &::after {
    background-color: var(--notification);
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    bottom: -4px;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    font-size: 13px;
    font-weight: bold;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    right: -4px;
    text-align: right;
    width: auto;
  }

  &.active,
  &:hover {
    background-color: ${(props) => props.isHome ? 'var(--home)' : 'var(--discord)'};
    border-radius: 16px;
  }
`;