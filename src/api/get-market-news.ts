import apiClient from "@/api/api-client";

type Props = {
  category: "general" | "forex" | "crypto" | "merger";
  minId?: number;
};

type NewsItem = {
  category: Props["category"];
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

const getMarketNews = async ({ category, minId }: Props) => {
  const response = await apiClient<NewsItem[]>({
    method: "GET",
    path: `news?category=${category}${minId ? `&minId=${minId}` : ""}`,
  });

  return response.map((item) => ({
    thumbnail: item.image,
    source: item.source,
    date: item.datetime,
    title: item.headline,
    url: item.url,
  }));
};

export default getMarketNews;
