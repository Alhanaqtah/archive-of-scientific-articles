import { api } from "@/app/api";
import { AxiosResponse } from "axios";

export interface ArticleData {
  title: string;
  annotation: string;
  blob: Blob | null;
  author: string;
  sci_area: string;
  keywords: string[];
}

export interface Article {
  id: string;
  title: string;
  annotation: string;
  blob: Blob | null;
  author: string;
  sci_area: string;
  keywords: string[];
  created_at: string;
}

export class ArticleService {
  static async createArticle(articleData: ArticleData) {
    api.post("/articles", articleData);
  }

  static async getArticles(
    page: number = 1
  ): Promise<AxiosResponse<Article[]>> {
    return api.get(`/articles?page=${page}&limit=10`);
  }

  static async getArticle(articleId: string): Promise<AxiosResponse<Article>> {
    return api.get(`/articles${articleId}`);
  }
}
