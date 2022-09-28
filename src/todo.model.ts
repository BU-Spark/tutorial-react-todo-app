import { Moment } from "moment";

export interface ITodo {
  id?: string;
  name: string;
  completed?: boolean;
  date: Moment;
}
