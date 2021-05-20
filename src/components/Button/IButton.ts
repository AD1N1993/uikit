import React, {SyntheticEvent} from "react";

export interface IButton {
  attrs?: any
  className?: string
  children: React.ReactNode
  disabled: boolean
  onClick: (e: SyntheticEvent) => void
  size: 's' | 'l'
  theme?: 'light' | 'dark'
  variant?: 'standard' | 'save' | 'accent' | 'additional' | 'dangerous' | 'inversion'
}
