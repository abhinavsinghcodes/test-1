import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  creator?: string | null;
  dateCreated?: Date | null;
  user?: UserWhereUniqueInput | null;
};
