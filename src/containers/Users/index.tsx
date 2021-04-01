import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../actions/user';
import { CardList } from '../../components/CardList';
import { State } from '../../reducers/user';
import { userService } from '../../services/user';
import { RootState } from '../../store';
import { UsersPreloader } from './loader';
export const Users = () => {
  const users = useSelector((state: RootState) => state.userReducer.users);
  const filter = useSelector((state: any) => state.userReducer.filter);
  const filteredUsers = userService.filter(filter, users);
  console.log(users, filteredUsers);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  const handleUpdateStatus = useCallback(
    (id, status) => dispatch(userActions.updateStatus(id, status)),
    [],
  );

  if (loading) {
    return <UsersPreloader />;
  }
  if (filteredUsers) {
    return <CardList users={filteredUsers} onChange={handleUpdateStatus} />;
  }
  return null;
};
