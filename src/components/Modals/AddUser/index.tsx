import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { StatusSelect } from '../../StatusSelect';
import { Status } from '../../../services/user';
import { DialogContainer } from './styles';
export interface AddUserModalProps {
  open: boolean;
  handleClickClose: () => void;
  status: Status;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const AddUserModal = (props: AddUserModalProps) => {
  const { open, handleClickClose, status, name, onChange, onSubmit } = props;

  return (
    <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create new user</DialogTitle>
      <DialogContainer>
        <TextField
          autoFocus
          value={name}
          margin="dense"
          name="name"
          label="User name"
          type="email"
          onChange={onChange}
          fullWidth
        />
        <StatusSelect name="status" value={status} label="Status" onChange={onChange} fullWidth />
      </DialogContainer>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          Create
        </Button>
        <Button onClick={handleClickClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
