import { useFormik } from 'formik';
import { InterractBar } from '../../../components/InterractBar';
import { Status } from '../../../services/user';

interface SearchFormValues {
  searchStatus: Status;
  searchValue: string;
}
const initialValues: SearchFormValues = {
  searchValue: '',
  searchStatus: '',
};

export interface SearchUserProps {
  filterUser: (searchValue: string, searchStatus: Status) => void;
}

export const SearchUser = (props: SearchUserProps) => {
  const { filterUser } = props;
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      filterUser(formik.values.searchValue, formik.values.searchStatus);
    },
  });
  return (
    <InterractBar
      searchValue={formik.values.searchValue}
      searchStatus={formik.values.searchStatus}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
};
