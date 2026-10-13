import { NeoComErrorDefinition } from "./NeoComSharedErrorCatalog"

export class NeoComError extends Error {
    public httpCode?: number
    public code?: string

    public static Builder  = class Builder {
        public error: NeoComError

        constructor(error: NeoComErrorDefinition) {
            this.error = new NeoComError(error.messagePattern)
            this.error.httpCode = error.httpCode
            this.error.code = error.code
            this.error.message = error.messagePattern as string
        }
        public build(): NeoComError {
            return this.error
        }
    }
}
