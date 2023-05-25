export interface IGetItem<T> {
    success: boolean,
    itemFound: boolean,
    item: T,
    key_message: string
  }