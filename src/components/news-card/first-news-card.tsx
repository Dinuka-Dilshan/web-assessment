import { NewsItem } from "@/api/get-market-news";
import ArticleLink from "@/components/news-card/article-link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  newsItem: NewsItem;
  className?: string;
};

const FirstNewsCard = ({
  newsItem: { thumbnail, title, url },
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "flex bg-black gap-4 flex-col w-full pb-2 relative aspect-[8/7] rounded-md",
        className
      )}
    >
      <Image
        src={thumbnail}
        alt={title}
        width={550}
        height={400}
        priority
        className="absolute top-0 w-full h-full  rounded-md object-cover"
      />

      <div className="absolute bottom-0 bg-[linear-gradient(90deg,#510049_0%,rgba(81,0,73,0.1)_100%)] p-5 pb-8 rounded-b-md flex flex-col gap-5">
        <p className="text-white font-roboto font-bold text-[24px] lg:text-[26px] leading-[130%] tracking-[-0.04em] capitalize">
          {title}
        </p>

        <ArticleLink url={url} />
      </div>
    </div>
  );
};

export default FirstNewsCard;
