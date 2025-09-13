import getMarketNews from "@/api/get-market-news";
import FirstNewsCard from "@/components/news-card/first-news-card";
import NewsCard from "@/components/news-card/regular-news-card";

const NewsList = async () => {
  const news = await getMarketNews({ category: "general" });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {news.map((newsItem, index) =>
        index === 0 ? (
          <FirstNewsCard
            key={newsItem.id}
            newsItem={newsItem}
            className="col-span-1 sm:col-span-2"
          />
        ) : (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        )
      )}
    </div>
  );
};

export default NewsList;
