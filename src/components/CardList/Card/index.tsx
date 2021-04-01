import { Typography, Avatar } from '@material-ui/core';
import React, { useCallback } from 'react';
import { Status } from '../../../services/user';

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
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(id, event.target.value as Status);
    },
    [id, onChange],
  );
  return (
    <CardContainer>
      <CardContentContainer>
        <AvatarContainer>
          <Avatar
            style={{ width: 100, height: 100 }}
            alt={name}
            src="https://static.toiimg.com/photo/76729750.cms"
          />
        </AvatarContainer>
        <CardInfoContainer>
          <Typography variant="inherit">{name}</Typography>
          <SelectContainer name={`cardSelect${id}`} value={status} onChange={onChangeCall} />
        </CardInfoContainer>
      </CardContentContainer>
    </CardContainer>
  );
};
