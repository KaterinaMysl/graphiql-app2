import { getIntrospectionQuery } from 'graphql/utilities';
import { SchemaType } from '../utils/types';

export const getSchema = async (endpoint: string): Promise<SchemaType[]> => {
  const introspectionQuery = getIntrospectionQuery();
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const schemaJSON = await response.json();
  const introspectionData = schemaJSON.data;

  return introspectionData.__schema.types;
};
