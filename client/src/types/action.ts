export default interface Action {
  type: string;
}

export interface ActionFunc {
  (): Action;
}
