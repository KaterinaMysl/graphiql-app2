import { RootState } from '../../store_1';

export const selectSchemaResponse = (state: RootState) => state.schema;
console.log(selectSchemaResponse);
// console.log(state);
// console.log(RootState);
// console.log(schema);
// console.log(state.schema);
