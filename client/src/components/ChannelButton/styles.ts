import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 5px 3px;
  transition: background-color 0.2s;

  > div {
    align-items: center;
    display: flex;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  > div .hashtag {
    color: var(--symbol);
    height: 20px;
    width: 20px;
  }

  > div .invite {
    color: var(--symbol);
    cursor: pointer;
    height: 16px;
    transition: color 0.2s;
    width: 16px;

    &:hover {
      color: var(--white);
    }
  }

  > div .config {
    color: var(--symbol);
    cursor: pointer;
    height: 16px;
    margin-left: 8px;
    transition: color 0.2s;
    width: 16px;

    &:hover {
      color: var(--white);
    }
  }

  &.active,
  &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;