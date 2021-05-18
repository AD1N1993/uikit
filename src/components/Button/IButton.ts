export interface IButton {
  disabled?: boolean
  onClick: () => void
  label: string
  theme: 'light' | 'dark'
  type: 'save' | 'accent' | 'additional' | 'dangerous' | 'inversion'
}
