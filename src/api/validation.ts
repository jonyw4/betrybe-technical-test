export abstract class ValidationHandler<T> {
  constructor(protected data: T) {}
  public abstract async handle(): Promise<boolean>;
}

export interface ValidationResponseSuccess {
  valid: true;
}
export interface ValidationResponseError {
  valid: false;
  handler: string;
}
export type ValidationResponse =
  | ValidationResponseSuccess
  | ValidationResponseError;

export abstract class Validator<T> {
  constructor(
    protected data: T,
    protected handlers: Array<new (data: T) => ValidationHandler<T>>
  ) {}
  public async validate(): Promise<ValidationResponse> {
    for (const Handler of this.handlers) {
      const valid = await new Handler(this.data).handle();
      if (!valid) {
        return {
          valid: false,
          handler: Handler.name
        };
      }
    }
    return {
      valid: true
    };
  }
}
