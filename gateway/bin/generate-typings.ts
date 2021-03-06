import { join } from 'path';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(__dirname, '../src/_generated/graphql/typings.ts'),
  outputAs: 'class',
  watch: true,
});
