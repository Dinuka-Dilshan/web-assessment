import { CircleArrowRight } from "lucide-react";

type Props = {
  url: string;
};

const ArticleLink = ({ url }: Props) => {
  return (
    <div className="flex gap-1 min-h-5 items-end cursor-pointer">
      <a
        className="text-white font-normal text-[15px] leading-[100%] tracking-[0] underline underline-offset-8"
        target="_blank"
        href={url}
      >
        Read Article
      </a>
      <CircleArrowRight
        className="text-white size-6 -rotate-45 self-start"
        strokeWidth={1}
      />
    </div>
  );
};

export default ArticleLink;
