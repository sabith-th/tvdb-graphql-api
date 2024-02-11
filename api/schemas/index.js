import gql from 'graphql-tag';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const modulePath = dirname(fileURLToPath(import.meta.url))
const typeDefinitions = readFileSync(resolve(modulePath, '../schemas/tvdb.graphql'), 'utf8');

export default gql`
  ${typeDefinitions}
`;
