import { css } from "@emotion/react"

export const colors = {
  primary: "var(--primary)",
  primaryHighlight: "var(--primaryHighlight)",
  accent: "var(--accent)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  text: "var(--text)",
  bg: "var(--bg)",
} as const

export const elevations = {
  shadowXs: "var(--sh-xs)",
  shadowS: "var(--sh-s)",
  shadowSh: "var(--sh)",
  shadowM: "var(--sh-m)",
  shadowL: "var(--sh-l)",
  shadowLg: "var(--sh-lg)",
  shadowXl: "var(--sh-xl)",
  shadowInner: "var(--sh-inner)",
  shadowOutline: "var(--sh-outline)",
} as const

export const resetBtnStyles = css`
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 4px;
  border: 2px solid ${colors.text};
  color: ${colors.text};
  box-shadow: ${elevations.shadowM};
`
