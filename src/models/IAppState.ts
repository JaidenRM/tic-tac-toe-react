import { AppState } from '../constants'

export interface IAppState {
  appState: AppState
  players: IAppState[] | undefined
}
