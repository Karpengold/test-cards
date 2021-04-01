import styled from 'styled-components';
import { Input } from '@material-ui/core';
import { StatusSelect } from '../StatusSelect';

export const InterractBarContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  display: flex;
`;

export const SelectContainer = styled(StatusSelect)`
  width: 100px;
`;
export const InputContainer = styled(Input)`
  display: flex;
  flex-grow: 1;
`;
