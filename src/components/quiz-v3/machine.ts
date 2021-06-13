import { assign, createMachine } from "xstate"
import { EVENTS, quizData, QuizGameContext, QuizMachineEvent } from "./utils"

export const quizMachine = createMachine<QuizGameContext, QuizMachineEvent>(
  {
    id: "quiz",
    initial: "idle",
    context: {
      score: 0,
      currentQuestion: 0,
      quizData,
      hasAnsweredLastQuestion: false,
      answeredData: [],
    },
    states: {
      idle: {
        entry: "clearContext",
        on: {
          [EVENTS.TOGGLE]: {
            target: "active",
          },
        },
        meta: "start",
      },
      active: {
        always: [{ target: "finalQuestion", cond: "isOnLastQuestion" }],
        on: {
          [EVENTS.NEXT]: {
            actions: ["nextQuestion", "incrementScore"],
          },
        },
        meta: "keep answering",
      },
      finalQuestion: {
        always: [{ target: "endOfQuiz", cond: "isFinalAnswer" }], // when
        on: {
          [EVENTS.NEXT]: {
            actions: ["incrementScore"],
          },
        },
        meta: "last question",
      },
      endOfQuiz: {
        meta: "End of the game",
        on: {
          CLICK: {
            target: "checking",
          },
          TOGGLE: {
            target: "idle",
          },
        },
      },
      checking: {
        on: {
          [EVENTS.CLICK]: {
            target: "viewStats",
          },
          [EVENTS.TOGGLE]: {
            target: "idle",
          },
        },
        meta: "Check stats and result",
      },

      viewStats: {
        meta: "View your stats",
        on: {
          [EVENTS.CLICK]: {
            target: "checking",
          },
        },
        entry: () => {
          console.log("entred")
        },
      },
    },
  },
  {
    actions: {
      clearContext: assign<QuizGameContext, QuizMachineEvent>({
        score: 0,
        currentQuestion: 0,
        quizData,
        hasAnsweredLastQuestion: false,
      }),
      nextQuestion: assign({
        currentQuestion: context => context.currentQuestion + 1,
      }),
      incrementScore: assign({
        score: ({ score }, event) => {
          if (event.type === "NEXT") {
            return event.isTrue ? score + 1 : score
          }
          return score
        },
        hasAnsweredLastQuestion: (context, event) => {
          if (event.type === "NEXT") {
            context.hasAnsweredLastQuestion = event.hasAnsweredLastQuestion
          }
          return context.hasAnsweredLastQuestion
        },
      }),
    },
    guards: {
      isAnswerCorrect: (_, event) => {
        if (event.type === "NEXT") {
          return event.isTrue
        }
        return false
      },
      isNotOnLastQuestion: context => context.quizData.length - 1 !== context.currentQuestion,
      isOnLastQuestion: context => context.quizData.length - 1 === context.currentQuestion,
      isFinalAnswer: context => context.hasAnsweredLastQuestion,
    },
  }
)
