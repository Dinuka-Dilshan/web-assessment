import apiClient from "@/api/api-client";

type Props = {
  category: "general" | "forex" | "crypto" | "merger";
  minId?: number;
};

type ResponseNewsItem = {
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

export type NewsItem = Awaited<ReturnType<typeof getMarketNews>>[number];

const getMarketNews = async ({ category, minId }: Props) => {
  const response = await apiClient<ResponseNewsItem[]>({
    method: "GET",
    path: `news?category=${category}${minId ? `&minId=${minId}` : ""}`,
    options: {
      cache: "force-cache",
      next: {
        revalidate: 60 * 5, // 5 minutes
      },
    },
  });

  return response.map((item) => ({
    thumbnail: item.image,
    source: item.source,
    date: item.datetime,
    title: item.headline,
    url: item.url,
    id: item.id,
  }));
};

export default getMarketNews;
