import axios from 'axios';
import config from '../config.json';
export const Statuses = {
  OnVacation: 'OnVacation',
  Working: 'Working',
  BusinessTrip: 'BusinessTrip',
  LunchTime: 'LunchTime',
  '': '',
};
export type Status = keyof typeof Statuses;
export interface User {
  id: number;
  username: string;
  status: Status;
}

const getAll = () => {
  return axios.get(`${config.apiUrl}/users`);
};
const updateStatus = (id: number, status: string) => {
  console.log('post update status');
  return axios.post(`${config.apiUrl}/users/${id}`, {
    status,
  });
};
const addUser = (name: string, status: Status) => {
  return axios.post(`${config.apiUrl}/user`, {
    status,
    name,
  });
};
const filter = (filter: any, users?: User[]) => {
  if (filter) {
    return users?.filter((user) => {
      if (filter.searchStatus && user.status !== filter.searchStatus) {
        return false;
      }
      if (
        filter.searchValue &&
        user.username.toLowerCase().indexOf(filter.searchValue.toLowerCase()) === -1
      ) {
        return false;
      }
      return true;
    });
  }
  return users;
};

export const userService = {
  getAll,
  updateStatus,
  filter,
  addUser,
};
