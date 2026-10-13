import { Logger } from "@nestjs/common"
import { AxiosRequestConfig } from "axios"

export abstract class BaseTypedRequest {
	protected readonly logger = new Logger("BaseTypedRequest")
	public method: string = "GET"
	public requestAge: number = 600
	public request?: string
	public options?: AxiosRequestConfig

	protected abstract prepareRequest(): void
	protected abstract prepareOptions(): void

	protected prepare(): void {
		this.prepareRequest()
		this.prepareOptions()
	}
}
