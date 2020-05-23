import mongoose, { Schema, Mongoose } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const AnswerSchema = new Schema({
    descriptionAnswers: { type: String, required:true },
    questionTrue: { type: Boolean, default:false},
    questionId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref: 'Question'
    }
})
export const Answer = mongoose.model('Answer', AnswerSchema);
export const AnswerTC = composeWithMongoose(Answer);