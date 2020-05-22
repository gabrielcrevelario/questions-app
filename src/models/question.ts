import { Question, QuestionTC } from './questionSchema';
const QuestionQuery = {
    QuestionById: QuestionTC.getResolver('findById'),
    QuestionByIds: QuestionTC.getResolver('findByIds'),
    QuestionOne: QuestionTC.getResolver('findOne'),
    QuestionMany: QuestionTC.getResolver('findMany'),
    QuestionCount: QuestionTC.getResolver('count'),
    QuestionConnection: QuestionTC.getResolver('connection'),
    QuestionPagination: QuestionTC.getResolver('pagination'),
};

const QuestionMutation = {
    QuestionCreateOne: QuestionTC.getResolver('createOne'),
    QuestionCreateMany: QuestionTC.getResolver('createMany'),
    QuestionUpdateById: QuestionTC.getResolver('updateById'),
    QuestionUpdateOne: QuestionTC.getResolver('updateOne'),
    QuestionUpdateMany: QuestionTC.getResolver('updateMany'),
    QuestionRemoveById: QuestionTC.getResolver('removeById'),
    QuestionRemoveOne: QuestionTC.getResolver('removeOne'),
    QuestionRemoveMany: QuestionTC.getResolver('removeMany'),
};

export { QuestionQuery, QuestionMutation };