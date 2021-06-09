import { FormEvent } from "react"

const FORM_STATE = {
  idle: "idle",
  submitting: "submitting",
  success: "success",
  failure: "failure",
} as const

interface FormTransition {
  idle: {
    SUBMIT: Pick<typeof FORM_STATE, "submitting">
  }
}

const formTransitions = {
  // when we are on the idle state we can only transition to the submitting state
  [FORM_STATE.idle]: {
    // event name
    SUBMIT: FORM_STATE.submitting,
  },
  [FORM_STATE.submitting]: {
    SUCCEED: FORM_STATE.success,
    FAIL: FORM_STATE.failure,
  },
  [FORM_STATE.success]: {
    RESET: FORM_STATE.idle,
  },
  [FORM_STATE.failure]: {
    SUBMIT: FORM_STATE.submitting,
    RESET: FORM_STATE.idle,
  },
} as const

type FormStateKeys = keyof typeof FORM_STATE
type FormStateValues = typeof FORM_STATE[FormStateKeys]
type Event = "RESET" | "SUBMIT" | "FAIL" | "SUCCEED"

const transition = (state: FormStateKeys, event: Event) => {
  // @ts-ignore
  const nextState = formTransitions[state]["SUBMIT"]
  console.log(nextState)
}

const AboutPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  console.log(transition("success", "SUBMIT"))
  return (
    <form onClick={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="...your name" />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="...email@example.com" />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default AboutPage
