import { MenuItem, Typography, Avatar } from '@material-ui/core';
import React, { useCallback } from 'react';
import { Status, Statuses } from '../../../services/user';
import { StatusSelect } from '../../StatusSelect';
import {
  CardContainer,
  CardContentContainer,
  AvatarContainer,
  CardInfoContainer,
  SelectContainer,
} from './styles';

export interface CardProps {
  id: number;
  name?: string;
  status?: Status;
  onChange: (id: number, status: Status) => void;
}

export const Card = (props: CardProps) => {
  const { name, status, id, onChange } = props;
  const onChangeCall = useCallback(
    (event: any) => {
      onChange(id, event.target.value);
    },
    [id, status, onChange],
  );
  return (
    <CardContainer>
      <CardContentContainer>
        <AvatarContainer>
          <Avatar
            style={{ width: 100, height: 100 }}
            alt={name}
            src="https://lh3.googleusercontent.com/proxy/mFNMloeWYg6QkZhpZE4hW-gGALbZ6cPzVlYIXhKPTMDXxSoatprQe1B1TICix1DMWoZFP_bemwshY9AuddXReTB4T6KLkyHa-ChlSoUc2N6p2Oe4Jd2OgA"
          />
        </AvatarContainer>
        <CardInfoContainer>
          <Typography variant="inherit">{name}</Typography>
          <SelectContainer value={status} onChange={onChangeCall} />
        </CardInfoContainer>
      </CardContentContainer>
    </CardContainer>
  );
};
