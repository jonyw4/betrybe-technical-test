export abstract class Validation<T> {
  constructor(protected data: T) {}
  public abstract validate(): boolean;
}
