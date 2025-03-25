interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  content: string;
  helpful: number;
  comments: Comment[];
  isHelpful: boolean;
  showComments: boolean;
}

export type dataType = {
  logo: string;
  title: string;
  website: string;
  summary: string;
  rating: number;
  redirect: string;
  percentage: number;
  totalReviews: number;
  metricProfile: number[];
  office?: string[];
  reviews: Review[];
};
