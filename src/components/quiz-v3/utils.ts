import { EventObject } from "xstate"

export const DIALOG_TYPES = {
  END_GAME_MESSAGE: "END_GAME_MESSAGE",
  SHOW_STATS: "SHOW_STATS",
} as const

export type DialogType = keyof typeof DIALOG_TYPES

export function assertEventType<TE extends EventObject, TType extends TE["type"]>(
  event: TE,
  eventType: TType
): asserts event is TE & { type: TType } {
  if (event.type !== eventType) {
    throw new Error(`Invalid event: expected "${eventType}", got "${event.type}"`)
  }
}

export const EVENTS = {
  NEXT: "NEXT",
  TOGGLE: "TOGGLE",
}

export interface Answer {
  answer: string
  isTrue: boolean
}
export interface QuizData {
  id: number
  question: string
  answers: Array<Answer>
}

export const quizData = [
  {
    id: 0,
    question: "Who won world cup in football 2018?",
    answers: [
      { answer: "Brail", isTrue: false },
      { answer: "Germany", isTrue: false },
      { answer: "France", isTrue: true },
    ],
  },
  {
    id: 1,
    question: "Who won world cup in football 2002?",
    answers: [
      { answer: "Brail", isTrue: true },
      { answer: "England", isTrue: false },
      { answer: "Italy", isTrue: false },
    ],
  },
]

export interface QuizGameContext {
  score: number
  currentQuestion: number
  quizData: Array<QuizData>
  hasAnsweredLastQuestion: boolean
}

export type QuizMachineEvent =
  | { type: "TOGGLE" }
  | { type: "CLICK" }
  | { type: "SELECT" }
  | { type: "NEXT"; isTrue: boolean; hasAnsweredLastQuestion: boolean }
  | { type: "START" }

export const pluralize = (a: number, input: string) => (a > 1 ? input + "s" : input)
