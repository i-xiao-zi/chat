export interface Message<T=any> {
  id: string;
  route: string;
  code?: number;
  data: T;
}