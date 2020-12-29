import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import fetch from 'node-fetch'; // Use node-fetch here to allow SSR
import { CookiesProvider } from 'react-cookie';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql', fetch: fetch }),
  cache: new InMemoryCache()
});

// This default export is required
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </ApolloProvider>
  );
}
