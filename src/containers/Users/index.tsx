import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../actions/user';
import { CardList } from '../../components/CardList';
import { userService } from '../../services/user';
import { RootState } from '../../store';
import { UsersPreloader } from './loader';
export const Users = () => {
  const users = useSelector((state: RootState) => state.userReducer.users);
  const filter = useSelector((state: RootState) => state.userReducer.filter);
  const filteredUsers = userService.filter(filter, users);

  const loading = useSelector((state: RootState) => state.userReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  const handleUpdateStatus = useCallback(
    (id, status) => dispatch(userActions.updateStatus(id, status)),
    [dispatch],
  );

  if (loading) {
    return <UsersPreloader />;
  }
  if (filteredUsers) {
    return <CardList users={filteredUsers} onChange={handleUpdateStatus} />;
  }
  return null;
};
