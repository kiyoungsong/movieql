import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({

})

server.start(() => console.log('running'))

// schema 사용자에게 보내거나 사용자로 부터 받을 data에 대한 설명