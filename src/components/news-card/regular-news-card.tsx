import { NewsItem } from "@/api/get-market-news";
import ArticleLink from "@/components/news-card/article-link";
import Image from "next/image";

type Props = {
  newsItem: NewsItem;
};

const RegularNewsCard = ({ newsItem: { thumbnail, title, url } }: Props) => {
  return (
    <div className="flex bg-black gap-4 flex-col w-full pb-2">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={400}
        className="aspect-[4/3] lg:aspect-[3/2] rounded-md w-full object-cover"
      />
      <p className="text-white font-normal text-[24px] leading-[130%] tracking-[-0.04em] capitalize">
        {title}
      </p>

      <ArticleLink url={url} />
    </div>
  );
};

export default RegularNewsCard;
