This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Requirements:
Node v12+

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Problems to Solve

We want to automate the following processes:
- Keeper eligiblity

The following would be nice to have:
- Uphold the salary cap per team throughout the season
  - potentially send out an email when a team passes the threshold?
- End of year export
  - could auto-generate a list of keepers and their costs + remaining years
- Allow modification of rules through admin backend to reflect year to year changes
  - for example, if we were to change $5 cost, or increase years players could be kept, etc. 
  
## Solution

1. Leverage Yahoo Fantasy Sports API to automate list of transactions in our league
2. Set up daily(?) sync
3. Apply rules to list of transactions to track which keepers are eligible

## Deploy on Vercel

Main branch is now automatically deployed on Vercel:  https://kotkl-next.vercel.app/

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
