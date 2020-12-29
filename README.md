This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Requirements:
Node v12+

First, clone down the git repository.

Then install necessary node modules using:

`npm install`

To see the app, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Yahoo Fantasy Integration (Phase 2) Live!

Follow the instructions below to authorize the Yahoo API. Note that there are different instructions for doing this locally vs. on preview/production.

### Authorizing Yahoo Fantasy API

To use the fantasy integration you will need to visit /yahoo:

1. At the top of the page, you should see a status. If you are already connected, you're good to go!
2. If you aren't connected, there should be a button for you to connect. If you are on preview/production, the page should reload and you should now see the status change to connected. You can skip to "Accessing Yahoo Fantasy API" below.

If you are doing this locally, you will need to do the following:

1. After you press the button to connect, the page will redirect you to https://localhost:3000/api/auth/callback/?code={something}. This page will not load since localhost cannot load over https:
2. Modify the URL in the previous step by changing the 'https:' --> 'http:'
3. The app should now bring you back to /yahoo with the connected status showing.
4. You can now follow the mapping structing found in the "Accessing Yahoo Fantasy API" section below.

### Accessing Yahoo Fantasy API

You should now be authorized to access the yahoo api. Our app is mapped to all the yahoo api endpoints found here: [Yahoo Fantasy API](https://yfantasysandbox.herokuapp.com/)

The mapping structure is /api/yahoo/{top level}/{bottom level}

For example, if you wanted to access the league transactions found here: [League Transactions](https://yfantasysandbox.herokuapp.com/resource/league/transactions), you would go to /api/yahoo/league/transactions.

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

Main branch is now automatically deployed on Vercel: https://kotkl-next.vercel.app/

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
