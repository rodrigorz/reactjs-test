import UsersData, { User } from "../../database/users";

async function getUsers(status?: string): Promise<User[]> {
  const data = localStorage.getItem('users');

  if (!data) {
    localStorage.setItem('users', JSON.stringify(UsersData));
    return UsersData;
  }

  const users = JSON.parse(data) as User[];

  if (status) {
    return users.filter(user => user.status === status);
  }

  return users;
}

async function showUser(id: string | number): Promise<User | undefined> {
  const data = localStorage.getItem('users');
  if (!data) {
    return;
  }

  const users = JSON.parse(data) as User[];

  const user = users.find(user => user.id === Number(id));

  return user;
}

async function deleteUser(id: string | number): Promise<boolean> {
  const data = localStorage.getItem('users');
  if (!data) {
    return false;
  }
  const users = JSON.parse(data) as User[];

  users.forEach(user => {
    if (user.id === Number(id)) {
      user.status = 'inactive';
    }
  });

  localStorage.setItem('users', JSON.stringify(users));

  return true;
}

async function restoreUser(id: string | number): Promise<boolean> {
  const data = localStorage.getItem('users');
  if (!data) {
    return false;
  }
  const users = JSON.parse(data) as User[];

  users.forEach(user => {
    if (user.id === Number(id)) {
      user.status = 'active';
    }
  });

  localStorage.setItem('users', JSON.stringify(users));

  return true;
}

const api = {
  getUsers,
  showUser,
  deleteUser,
  restoreUser,
};

export default api;
