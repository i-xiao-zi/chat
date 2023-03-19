export interface Message {
  id: string;
  route: string;
  code?: number;
  data: any;
}