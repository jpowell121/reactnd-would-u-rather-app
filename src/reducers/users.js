import {RECEIVE_USERS, ANSWER_UPDATE_USER} from "../actions/users";
import {ADD_QUESTION} from "../actions/questions";

export default function users (state={}, action) {

  switch (action.type) {

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ANSWER_UPDATE_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {...state[action.authedUser].answers, [action.qid]: action.answer}
        }
      };

    case ADD_QUESTION:

      const { question } = action;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id]
        }
      };

    default:
      return state;
  }
}