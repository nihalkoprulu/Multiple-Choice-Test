
export interface QuestionDataType {
  id: number;
  question: string;
  answers: string[];
  multiple: boolean;
}

export interface ServerQuestionDataType {
  id: number;
  question: string;
  answers: string[];
  multiple: boolean;
  correctAnswers: string[];
}

export interface AnswerDataType {
  questionId: number;
  answers: string[];  
}

export interface ServerAnswerDataType {
  question: string;
  answers: string[];
  correctAnswers: string[];
  isCorrect: boolean;
}