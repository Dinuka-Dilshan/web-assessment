const NewsListLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex bg-black gap-4 flex-col w-full pb-2 animate-pulse rounded-md"
        >
          <div className="aspect-video rounded-md w-full bg-gray-800" />
          <div className="h-6 bg-gray-700 rounded w-3/4 mt-2" />
          <div className="h-4 bg-gray-700 rounded w-1/2 mt-1" />
        </div>
      ))}
    </div>
  );
};

export default NewsListLoading;
