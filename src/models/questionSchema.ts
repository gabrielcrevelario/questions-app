import mongoose, { Schema, Mongoose } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import {AnswerSchema} from './AnswerSchema';

export const QuestionSchema = new Schema(
    {
        questionNumber: {
            type: Number,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        answers: [AnswerSchema]

    },
    {
        collection: 'questions',
    }
)

QuestionSchema.index({ createdAt: 1, updatedAt: 1 });

export const Question = mongoose.model('Question', QuestionSchema);
export const QuestionTC = composeWithMongoose(Question);
