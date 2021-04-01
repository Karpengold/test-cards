import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../actions/user';
import { AddUser } from './AddUser';
import { SearchUser } from './SearchUser';
import { ControlFormContainer } from './styles';

export const ControlForm = () => {
  const dispatch = useDispatch();
  const addUser = useCallback((name, status) => dispatch(userActions.addUser(name, status)), [
    dispatch,
  ]);
  const filterUser = useCallback(
    (searchValue, selectValue) => dispatch(userActions.setFilter(searchValue, selectValue)),
    [dispatch],
  );
  return (
    <ControlFormContainer>
      <AddUser addUser={addUser} />
      <SearchUser filterUser={filterUser} />
    </ControlFormContainer>
  );
};
