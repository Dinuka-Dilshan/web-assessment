import getMarketNews from "@/api/get-market-news";
import NewsCard from "@/components/news-card";

const NewsList = async () => {
  const news = await getMarketNews({ category: "general" });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
