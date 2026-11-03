import { NeocomBackendError } from './neocom-backend.error.js';
import {
  isExceptionPayload,
  type ExceptionPayload,
} from './exception-payload.js';

/**
 * Catalog entry: stable code + parametrized message template + mapped HTTP status.
 * `doThrow` returns a {@link NeocomBackendError}; the call site uses `throw`.
 * Named catalogs (which entries exist) stay in the consuming app (e.g. neocom-back).
 */
export class ExceptionCatalogEntry {
  constructor(
    readonly code: string,
    readonly messageTemplate: string,
    readonly httpStatus: number,
  ) {}

  /**
   * Fill `{0}`, `{1}`, … from message params; optional last arg is the payload.
   * Does **not** throw — returns the exception for `throw` at the call site.
   */
  doThrow(...args: unknown[]): NeocomBackendError {
    let payload: ExceptionPayload | undefined;
    let messageParams = args;
    if (args.length > 0 && isExceptionPayload(args[args.length - 1])) {
      payload = args[args.length - 1] as ExceptionPayload;
      messageParams = args.slice(0, -1);
    }

    const description = formatMessage(this.messageTemplate, messageParams);
    return new NeocomBackendError(this.httpStatus, [
      {
        code: this.code,
        description,
        ...(payload?.field === undefined ? {} : { field: payload.field }),
        ...(payload?.container === undefined ? {} : { container: payload.container }),
        ...(payload?.value === undefined ? {} : { value: payload.value }),
      },
    ]);
  }
}

function formatMessage(template: string, params: unknown[]): string {
  return template.replace(/\{(\d+)\}/g, (_match, index: string) => {
    const value = params[Number(index)];
    return value === undefined || value === null ? '' : String(value);
  });
}

export function catalogEntry(
  code: string,
  messageTemplate: string,
  httpStatus: number,
): ExceptionCatalogEntry {
  return new ExceptionCatalogEntry(code, messageTemplate, httpStatus);
}
