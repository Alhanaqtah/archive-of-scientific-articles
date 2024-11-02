import { AxiosResponse } from "axios";
import { Comment, CommentData } from "../model/Comment";
import { api } from "@/app/api";

export class CommentService {
  static getComments(articleId: string): Promise<AxiosResponse<Comment[]>> {
    return api.get(`/comments/${articleId}`);
  }

  static createComment(commentData: CommentData): Promise<void> {
    return api.post("/comments", commentData);
  }
}
