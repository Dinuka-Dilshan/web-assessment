import NewsList from "@/components/news-list";
import NewsListLoading from "@/components/news-list/loading";
import { Suspense } from "react";

const Home = async () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-white text-center text-2xl">BLOTT</p>
      <h1 className="text-white font-['Helvetica_Now_Display'] font-normal text-[40px]  lg:text-[80px] leading-[88%] tracking-[-0.01em] uppercase">
        latest news <br />
        from the world
      </h1>

      <Suspense fallback={<NewsListLoading />}>
        <NewsList />
      </Suspense>
    </div>
  );
};

export default Home;
