/**
 * Default exception payload — call-site attributes (not stored on catalog entries).
 */
export interface ExceptionPayload {
  field?: string;
  container?: string;
  value?: string;
}

/** Fluent builder for {@link ExceptionPayload} only — never builds NeocomBackendError. */
export class ExceptionPayloadBuilder {
  private readonly payload: ExceptionPayload = {};

  field(field: string): this {
    this.payload.field = field;
    return this;
  }

  container(container: string): this {
    this.payload.container = container;
    return this;
  }

  value(value: string): this {
    this.payload.value = value;
    return this;
  }

  build(): ExceptionPayload {
    return { ...this.payload };
  }
}

export function exceptionPayload(): ExceptionPayloadBuilder {
  return new ExceptionPayloadBuilder();
}

export function isExceptionPayload(value: unknown): value is ExceptionPayload {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  const keys = Object.keys(value);
  return keys.every((key) => key === 'field' || key === 'container' || key === 'value');
}
