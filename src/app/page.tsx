import getMarketNews from "@/api/get-market-news";

const Home = async () => {
  const news = await getMarketNews({ category: "general" });
  console.log(news);
  return <div>hi</div>;
};

export default Home;
