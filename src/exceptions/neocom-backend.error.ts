/**
 * Wire exception content for NeoCom backends (Nest filter renders this shape).
 * Framework-agnostic — HTTP status is a number; apps map status codes themselves.
 */
export interface NeocomBackendErrorEntry {
  code: string;
  description: string;
  field?: string;
  container?: string;
  value?: string;
}

export class NeocomBackendError extends Error {
  constructor(
    readonly httpStatus: number,
    readonly errors: NeocomBackendErrorEntry[],
    readonly traceId?: string,
  ) {
    super(errors[0]?.description ?? 'Backend error');
  }
}
