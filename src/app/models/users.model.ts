export interface Users {
  list: User[];
  pagination: Pagination;
}

export interface User {
  id: number;
  imageUrl: string;
  lastName: string;
  name: string;
  prefix: string;
  title: string;
}

export interface FullUser {
  id: number;
  email: string;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  ip: string;
  company: Company;
  address: Address;
}

interface Company {
  name: string;
  suffix: string;
}

interface Address {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
}
interface Pagination {
  current: number;
  nextPage: number;
  pageSize: number;
  prevousPage: number | null;
  total: number;
}
