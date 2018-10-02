import {saveQuestionAnswer} from "../utils/API";


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function userAnswerQuestion ({ authedUser, qid, answer }) {
  return {
    type: USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  }
}


// asynchronous actions
export function handleUserAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(userAnswerQuestion(info));

    return saveQuestionAnswer(info)
      .catch(() => {
        console.warn('Error in handleUserAnswerQuestion', info);
        dispatch(userAnswerQuestion(info));
        alert('There was an error saving an answered question. Try again.');
      })
  }
}