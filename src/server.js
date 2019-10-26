require('dotenv').config()
const {
  ApolloServer
} = require('apollo-server')

const typeDefs = `
  type Item{
    id: Int,
    type: String,
    description: String 
  }

  type Query{
    items (type: String): [Item]
  }
`

const items = [{
    id: 1,
    type: 'prefix',
    description: 'Air'
  },
  {
    id: 2,
    type: 'prefix',
    description: 'Jet'
  },
  {
    id: 3,
    type: 'prefix',
    description: 'Fligth'
  }, {
    id: 4,
    type: 'sufix',
    description: 'Hub'
  },
  {
    id: 5,
    type: 'sufix',
    description: 'Station'
  },
  {
    id: 6,
    type: 'sufix',
    description: 'Mart'
  }
]
const resolvers = {
  Query: {
    items(_, args) {
      return items.filter(item => item.type === args.type)
    }
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.listen({
  port: process.env.PORT || 4000
}).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
