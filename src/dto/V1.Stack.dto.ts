import { NeoComError } from "../exceptions/NeoComError"
import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { Record } from "../interfaces/Record.interface"

export class V1StackDto extends Record {
    public override jsonClass: string = 'StackDto'
    public quantity?: number
    public typeLink?: string

	public static Builder = class Builder {
		public constructingInstance: V1StackDto

		constructor(fields: object = {}) {
			this.constructingInstance = new V1StackDto(fields)
		}

		public withQuantity(quantity: number): Builder {
			this.constructingInstance.quantity = quantity
			return this
		}
		public withTypeLink(typeLink: string): Builder {
			this.constructingInstance.typeLink = typeLink
			return this
		}
		public build(): V1StackDto {
			if (undefined == this.constructingInstance.quantity) this.constructingInstance.quantity=1
			if (undefined == this.constructingInstance.typeLink) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()

			return this.constructingInstance
		}
	}
}
