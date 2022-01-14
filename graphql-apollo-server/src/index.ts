import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`

type Song {
    song: String
    artist: String
    songReleaseDate: String
    playCount: String
    metricA: String
    metricB: String
    metricC: String
    metricCi: String
    metricD: String
    metricE: String
    metricF: String
    metricG: String
    metricH: String
    metricI: String
    metricJ: String
    metricK: String
    metricL: String
    metricM: String
    metricN: String
    metricO: String
    metricP: String
}


type Query {
    songs: [Song]
}
`;
 
const resolvers = { 
    Query: { 
        songs: () => require('./resource/songData.json')
    }};


const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
