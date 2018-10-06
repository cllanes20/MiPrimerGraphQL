import { ApolloServer  } from 'apollo-server-express';
import * as express from 'express';

import {MongoClient, ObjectId} from 'mongodb';
import * as cors from "cors";
import { schema } from './schema';

const MONGO_URL = 'mongodb://localhost:27017';
export let MONGO_DB;

MongoClient.connect(MONGO_URL,{ useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
  MONGO_DB = client.db('retail');
});

const app = express();

require('./database/setup');

//settings
app.set('port', process.env.PORT || 4300);
app.use(cors());

// Routes
const server = new ApolloServer({
    schema: schema,
    // context: {      },
    playground: {
      endpoint: `http://localhost:4300/graphql`,
      settings: {
        'editor.theme': 'light'
      }
    }
  });
  
  server.applyMiddleware({ app, path: '/graphql' });
  
  // start server 
  app.listen(app.get('port'), ()=> {
      console.log('server on port: ', app.get('port'));
  });
