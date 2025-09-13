"use client";

import Image from "next/image";

const ErrorPage = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
      <Image
        src="/window.svg"
        alt="Error"
        width={80}
        height={80}
        className="mb-2"
      />
      <h1 className="text-white font-['Helvetica_Now_Display'] font-bold text-[40px] lg:text-[64px] leading-[88%] tracking-[-0.01em] uppercase">
        Something went wrong!
      </h1>
      <p className="text-muted-foreground text-lg max-w-md">
        Sorry, an unexpected error has occurred. Please try again later.
      </p>
      <p className="text-muted-foreground text-sm max-w-md">
        Error id: {error.digest}
      </p>
    </div>
  );
};

export default ErrorPage;
