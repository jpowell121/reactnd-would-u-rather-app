import {ANSWER_UPDATE_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions (state={}, action) {

  switch (action.type) {

    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_UPDATE_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.authedUser]
          }
        }
      };

    default:
      return state;
  }
}