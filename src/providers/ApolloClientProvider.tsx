import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://olivebranch.stepzen.net/api/mouthy-walrus/__graphql',
  headers: {
    Authorization:
      'apikey olivebranch::stepzen.net+1000::f79d2f40643f6af2a680dbf06d65834da573745d0f83a6618caa1d398b8c1751',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
