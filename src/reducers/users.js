import {RECEIVE_USERS, USER_ANSWER_QUESTION} from "../actions/users";

export default function users (state={}, action) {

  switch (action.type) {

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case USER_ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {...state[action.authedUser].answers, [action.qid]: action.answer}
        }
      };

    default:
      return state;
  }
}