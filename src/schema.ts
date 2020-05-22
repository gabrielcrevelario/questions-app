
import { SchemaComposer } from 'graphql-compose';

import db from './ultils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { QuestionQuery, QuestionMutation } from './models/question';
import {AnswerQuery, AnswerMutation } from './models/Answer'

schemaComposer.Query.addFields({
    ...QuestionQuery,
    ...AnswerQuery
});

schemaComposer.Mutation.addFields({
    ...QuestionMutation,
    ...AnswerMutation
});

export default schemaComposer.buildSchema();