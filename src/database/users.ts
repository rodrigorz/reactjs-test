export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  mobile: string;
  password: string;
  expire: boolean;
  expire_date?: string;
  status: string;
  profile?: string;
  company?: string;
}

const UsersData: User[] = [
  {
    id: 1,
    first_name: 'Leticia',
    last_name: 'Lopes',
    username: 'leticia.lopes',
    email: 'leticia.lopes@email.com',
    mobile: '11933224456',
    password: '123456',
    expire: false,
    profile: 'Office Support',
    status: 'active',
  },
  {
    id: 2,
    first_name: 'Maycon',
    last_name: 'Curz',
    username: 'maycon.cruz',
    email: 'maycon.cruz@email.com',
    mobile: '11924356897',
    password: '123456',
    expire: false,
    profile: 'Business Contact',
    status: 'active',
  },
  {
    id: 3,
    first_name: 'Tiago',
    last_name: 'Tapparo',
    username: 'tiago.tapparo',
    email: 'tiago.tapparo@email.com',
    mobile: '11943556778',
    password: '123456',
    expire: false,
    profile: 'Driver',
    status: 'inactive',
  },
];

export default UsersData;
