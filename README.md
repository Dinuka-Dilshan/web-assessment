# BLOTT News Web Assessment

This is a modern news web app built with [Next.js](https://nextjs.org), featuring server components, suspense loading states, and custom error handling. It fetches and displays the latest market news in a responsive grid layout.

## Features

- **Next.js 15** with App Router and Server Components
- **Tailwind CSS** for styling
- **Suspense** loading state for news list
- **Custom error page** with helpful feedback
- **Responsive grid** for news cards
- **First news card** highlighted with a special design
- **TypeScript** and strict linting

## Getting Started

Install dependencies:

```bash
pnpm install
# or
yarn install
# or
npm install
```

Run the development server:

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app/page.tsx` – Home page, renders the news list with suspense loading
- `src/components/news-list/` – News list and loading skeleton
- `src/components/news-card/` – News card components (first and regular)
- `src/app/error.tsx` – Custom error boundary page
- `src/api/get-market-news.ts` – News fetching logic

## Customization

- **Loading State:** The news list shows a skeleton loader while fetching data.
- **Error Handling:** If an error occurs, a user-friendly error page is displayed.

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Run ESLint

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript 5

---

This project was bootstrapped with `create-next-app` and extended for a modern, robust news experience.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
