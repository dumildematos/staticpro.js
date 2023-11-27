// src/types.ts
export type DirectiveImplementation = (element: HTMLElement, value: Boolean) => void;

export interface DirectiveObject {
    [key: string]: DirectiveImplementation;
}
