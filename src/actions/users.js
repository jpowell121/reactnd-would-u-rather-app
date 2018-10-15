import { saveQuestionAnswer } from "../utils/API";
import {ADD_QUESTION, answerUpdateQuestion} from './questions'


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_UPDATE_USER = 'ANSWER_UPDATE_USER';


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function answerUpdateUser ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_UPDATE_USER,
    authedUser,
    qid,
    answer,
  }
}

export function addQuestionUser (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

// asynchronous actions
export function handleAnswerUpdateUser (info) {
  return (dispatch) => {

    return saveQuestionAnswer(info)
      .catch(() => {
        console.warn('Error in handleUserAnswerQuestion', info);
        alert('There was an error saving an answered question. Try again.');
      })
      .then(dispatch(answerUpdateUser(info)))
      .then(dispatch(answerUpdateQuestion(info)))
  }
}