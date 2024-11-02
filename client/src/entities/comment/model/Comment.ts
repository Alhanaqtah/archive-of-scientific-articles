export interface Comment {
  id: string;
  author: string;
  article: string;
  text: string;
  created_at: string;
}

export interface CommentData {
  text: string;
  userId: string;
  articleId: string;
}
