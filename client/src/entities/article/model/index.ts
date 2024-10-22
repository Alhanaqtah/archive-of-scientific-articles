import { api } from "@/app/api";

export interface ArticleData {
  title: string;
  annotation: string;
  blob: Blob | null;
  author: string;
  sci_area: string;
  keywords: string[];
}

export class ArticleService {
  static async createArticle(articleData: ArticleData) {
    api.post("/articles", articleData);
  }
}
