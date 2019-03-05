import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  background-color: #204666;

  & > div {
    flex-shrink: 0;
    display: flex;
    align-items: center;

    &:last-child {
      flex: 1;
      justify-content: flex-end;
    }
  }

  button {
    line-height: 0;
  }
`;
