export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_UPDATE_QUESTION = 'ANSWER_UPDATE_QUESTION';

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

// asynchronous actions







