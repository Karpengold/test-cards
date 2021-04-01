import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { AddUserModal } from '../../../components/Modals/AddUser';
import { Status } from '../../../services/user';
import { ButtonContainer, AddUserContainer } from './styles';

export interface AddFormValues {
  name: string;
  status: Status;
}
export interface AddUserProps {
  addUser: (name: string, status: Status) => void;
}
const initialValues: AddFormValues = {
  name: '',
  status: '',
};

export const AddUser = (props: AddUserProps) => {
  const { addUser } = props;
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      handleClickClose();
      addUser(formik.values.name, formik.values.status);
    },
  });
  const handleClickClose = useCallback(() => setOpen(false), [setOpen]);
  const handleClickOpen = useCallback(() => setOpen(true), [setOpen]);

  return (
    <AddUserContainer>
      <ButtonContainer variant="contained" color="primary" onClick={handleClickOpen}>
        Create +
      </ButtonContainer>
      {open && (
        <AddUserModal
          onChange={formik.handleChange}
          onSubmit={formik.handleSubmit}
          status={formik.values.status}
          name={formik.values.name}
          open={open}
          handleClickClose={handleClickClose}
        />
      )}
    </AddUserContainer>
  );
};
