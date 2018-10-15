import {saveQuestion } from "../utils/API";
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_UPDATE_QUESTION = 'ANSWER_UPDATE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerUpdateQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_UPDATE_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

// asynchronous actions

export function handleAddQuestion (question) {
  return (dispatch) => {

    dispatch(showLoading());
    return saveQuestion(question)
      .catch(() => {
        console.warn('Error in handleAddQuestion', question);
        alert('There was an error saving a new question. Try again.');
      })
      .then((question) => dispatch(addQuestion(question)))
      //.then((question) => dispatch(addQuestionUser(question)))
      .then(dispatch(hideLoading()))
  }
}







