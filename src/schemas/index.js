import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { join } from 'path';

const typeDefinitions = readFileSync(join(__dirname, '../schemas/tvdb.graphql'), 'utf8');

export default gql`
  ${typeDefinitions}
`;
