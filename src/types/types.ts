// src/types.ts
export abstract class DirectiveImplementation<T> {
  abstract execute(element: HTMLElement, value: T): void;
}

export interface DirectiveObject {
  [key: string]: new () => DirectiveImplementation<any>;
}
