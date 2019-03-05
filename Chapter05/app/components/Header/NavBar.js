import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  background-color: #204666;

  & > div {
    flex: 1;
    display: flex;

    &:last-child {
      justify-content: flex-end;
    }
  }

  & > button {
    line-height: 0;
  }
`;
