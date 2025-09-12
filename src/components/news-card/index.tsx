import { NewsItem } from "@/api/get-market-news";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  newsItem: NewsItem;
};

const NewsCard = ({ newsItem }: Props) => {
  return (
    <div className="flex bg-black gap-4 flex-col w-full pb-2">
      <Image
        src={newsItem.thumbnail}
        alt={newsItem.title}
        width={400}
        height={400}
        className="aspect-video rounded-md w-full"
      />
      <p className="text-white font-normal text-[24px] leading-[130%] tracking-[-0.04em] capitalize">
        {newsItem.title}
      </p>

      <div className="flex gap-1 min-h-5 items-end">
        <a
          className="text-white font-normal text-[15px] leading-[100%] tracking-[0] underline underline-offset-8"
          target="_blank"
          href={newsItem.url}
        >
          Read Article
        </a>
        <CircleArrowRight
          className="text-white size-6 -rotate-45 self-start"
          strokeWidth={1}
        />
      </div>
    </div>
  );
};

export default NewsCard;
