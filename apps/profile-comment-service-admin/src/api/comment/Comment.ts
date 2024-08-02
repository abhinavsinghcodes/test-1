import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  creator: string | null;
  dateCreated: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
