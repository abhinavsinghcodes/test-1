import { Comment } from "../comment/Comment";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  userName: string | null;
  username: string;
};
