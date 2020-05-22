import { Answer, AnswerTC } from './AnswerSchema';
const AnswerQuery = {
    AnswerById: AnswerTC.getResolver('findById'),
    AnswerByIds: AnswerTC.getResolver('findByIds'),
    AnswerOne: AnswerTC.getResolver('findOne'),
    AnswerMany: AnswerTC.getResolver('findMany'),
    AnswerCount: AnswerTC.getResolver('count'),
    AnswerConnection: AnswerTC.getResolver('connection'),
    AnswerPagination: AnswerTC.getResolver('pagination'),
};

const AnswerMutation = {
    AnswerCreateOne: AnswerTC.getResolver('createOne'),
    AnswerCreateMany: AnswerTC.getResolver('createMany'),
    AnswerUpdateById: AnswerTC.getResolver('updateById'),
    AnswerUpdateOne: AnswerTC.getResolver('updateOne'),
    AnswerUpdateMany: AnswerTC.getResolver('updateMany'),
    AnswerRemoveById: AnswerTC.getResolver('removeById'),
    AnswerRemoveOne: AnswerTC.getResolver('removeOne'),
    AnswerRemoveMany: AnswerTC.getResolver('removeMany'),
};

export { AnswerQuery, AnswerMutation };