import { Button, Input, Select, MenuItem } from '@material-ui/core';
import { useCallback } from 'react';
import { Status } from '../../services/user';
import { AddUserModal } from '../Modals/AddUser';
import { InterractBarContainer, InputContainer, SelectContainer } from './styles';

export interface InterractBarProps {
  handleSubmit: (event: any) => void;
  handleChange: (event: any) => void;
  searchValue?: string;
  searchStatus?: Status;
}

const InterractBar = (props: InterractBarProps) => {
  const { searchStatus, searchValue, handleChange, handleSubmit } = props;
  const handleChangeCall = useCallback(
    (event: any) => {
      handleChange(event);
      handleSubmit(event);
    },
    [handleSubmit, handleChange],
  );
  return (
    <InterractBarContainer>
      <InputContainer name={'searchValue'} value={searchValue} onChange={handleChangeCall} />

      <SelectContainer name={'searchStatus'} value={searchStatus} onChange={handleChangeCall} />
    </InterractBarContainer>
  );
};

export { InterractBar };
