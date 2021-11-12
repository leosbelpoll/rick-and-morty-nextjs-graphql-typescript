import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "./_app.css";

export default function App({ Component, pageProps }: any) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
