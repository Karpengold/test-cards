import { MenuItem, TextFieldProps } from '@material-ui/core';
import { Status, Statuses } from '../../services/user';
import { TextFieldContainer } from './styles';

export const StatusSelect = (props: TextFieldProps) => {
  return (
    <TextFieldContainer {...props} select>
      {(Object.keys(Statuses) as Array<Status>).map((status) => {
        return <MenuItem value={status}>{Statuses[status]}</MenuItem>;
      })}
    </TextFieldContainer>
  );
};
