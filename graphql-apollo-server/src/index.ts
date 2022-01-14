import { ApolloServer, gql } from 'apollo-server';

// export const typeDefs = gql`

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

// type Song = {
//     song: String
//     artist: String
//     songReleaseDate: String
//     playCount: String
//     metricA: String
//     metricB: String
//     metricC: String
//     metricD: String
//     metricE: String
//     metricF: String
//     metricG: String
//     metricH: String
//     metricI: String
//     metricJ: String
//     metricK: String
//     metricL: String
//     metricM: String
//     metricN: String
//     metricO: String
//     metricP: String
// }

//     type query = {
//         getSongData: [Song]
//     }
// `;

// export const resolvers = { Query: { songs: () => 'resouce\songData.json'}};


const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
