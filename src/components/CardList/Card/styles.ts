import styled from 'styled-components';
import { Avatar, Card, CardContent, Select } from '@material-ui/core';
import { StatusSelect } from '../../StatusSelect';
export const CardContainer = styled(Card)`
  width: 300px;
  height: 150px;
`;

export const AvatarContainer = styled.div`
  height: 100px;
  width: 100px;
  padding: 10px;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 10px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 20px;
  flex: 1;
`;

export const SelectContainer = styled(StatusSelect)`
  width: 100%;
`;
