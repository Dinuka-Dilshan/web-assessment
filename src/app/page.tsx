import getMarketNews from "@/api/get-market-news";
import NewsCard from "@/components/news-card";

const Home = async () => {
  const news = await getMarketNews({ category: "general" });
  return (
    <div className="flex flex-col gap-10">
      <p className="text-white text-center text-2xl">BLOTT</p>
      <h1 className="text-white font-['Helvetica_Now_Display'] font-normal text-[40px]  lg:text-[80px] leading-[88%] tracking-[-0.01em] uppercase">
        latest news <br />
        from the world
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
};

export default Home;
