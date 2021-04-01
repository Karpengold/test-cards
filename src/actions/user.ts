import { Status, User, userService } from '../services/user';
import { userConstants } from '../constants/user';

const getAll = () => {
  return (dispatch: any) => {
    dispatch(request());

    userService.getAll().then(
      (response) => dispatch(success(response.data.users)),
      (error) => dispatch(failure(error.toString())),
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users: any) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error: any) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
};

const updateStatus = (id: number, status: string) => {
  console.log('update status', id, status);
  return (dispatch: any) => {
    dispatch(request(id, status));

    userService.updateStatus(id, status).then(
      () => dispatch(success(id, status)),
      (error) => dispatch(failure(id, status, error.toString())),
    );
  };

  function request(id: number, status: string) {
    return { type: userConstants.UPDATE_REQUEST, id, status };
  }
  function success(id: number, status: string) {
    return { type: userConstants.UPDATE_SUCCESS, id, status };
  }
  function failure(id: number, status: string, error: string) {
    return { type: userConstants.UPDATE_FAILURE, id, status, error };
  }
};

const setFilter = (searchValue?: string, searchStatus?: Status) => {
  return { type: userConstants.FILTER_SUCCESS, searchValue, searchStatus };
};

const addUser = (name: string, status: Status) => {
  return (dispatch: any) => {
    dispatch(request(name, status));

    userService.addUser(name, status).then(
      (response) => dispatch(success(response.data.user)),
      (error) => dispatch(failure(error.toString())),
    );
  };

  function request(name: string, status: Status) {
    return { type: userConstants.ADD_REQUEST, name, status };
  }
  function success(user: User) {
    return { type: userConstants.ADD_SUCCESS, user };
  }
  function failure(error: string) {
    return { type: userConstants.ADD_FAILURE, error };
  }
};

export const userActions = {
  getAll,
  updateStatus,
  setFilter,
  addUser,
};
