import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const CHARACTERS_QUERY = gql`
{
    characters{
      results{
        name
        species
      }
    }
  }
`;

function Example() {
    const { loading, error, data } = useQuery(CHARACTERS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
        <select >
            {
      data.characters.results.map(({ name, species }) => (
        <option key={name}>
            {name}: {species}
        </option>
      ))}
        </select>
    
    );
}

const ExampleQuery = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Example />
      </ApolloProvider>
    </div>
  );
};

export default ExampleQuery;
