export interface IGetItems<T> {
    success: boolean,
    message: string,
    items: T[]
    params: Object,
  }