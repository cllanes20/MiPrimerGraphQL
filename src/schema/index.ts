import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import {importSchema} from 'graphql-import';
import { resolvers } from './resolvers';

const typeDefs = gql(importSchema(`${__dirname}/schema.graphql`));

export const schema = makeExecutableSchema({ typeDefs, resolvers });