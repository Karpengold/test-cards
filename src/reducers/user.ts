import { userConstants } from '../constants/user';
import { Status, User } from '../services/user';

export interface State {
  users?: User[];
  loading?: boolean;
  filter?: {
    searchValue?: string;
    statusValue?: Status;
  };
  error?: boolean;
}
const initialState: State = {
  users: [],
  filter: {
    searchValue: '',
    statusValue: '',
  },
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
        loading: false,
      };

    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
        users: state.users?.map((user: User) => {
          if (user.id === action.id) {
            user.status = action.status;
          }
          return user;
        }),
      };
    case userConstants.UPDATE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case userConstants.FILTER_SUCCESS:
      return {
        ...state,
        filter: {
          searchValue: action.searchValue,
          searchStatus: action.searchStatus,
        },
      };

    case userConstants.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.ADD_SUCCESS:
      let { users } = state;
      users = users ? [...users, action.user] : [action.user];

      return {
        ...state,
        users,
        loading: false,
      };
    case userConstants.ADD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
