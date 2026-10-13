import { NeoComError } from "../exceptions/NeoComError"
import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { Record } from "../interfaces/Record.interface"
import { V1StackDto } from "./V1.Stack.dto"

export class V1AssetDto extends Record {
	public override jsonClass: string = "AssetDto"
	public id?: number
	public resource?: V1StackDto
	public locationLink?: string

	public static Builder = class Builder {
		public constructingInstance: V1AssetDto

		constructor(fields: object = {}) {
			this.constructingInstance = new V1AssetDto(fields)
		}

		public withId(id: number): Builder {
			this.constructingInstance.id = id
			return this
		}
		public withResource(resource: V1StackDto): Builder {
			this.constructingInstance.resource = resource
			return this
		}
		public withLocationLink(locationLink: string): Builder {
			this.constructingInstance.locationLink = locationLink
			return this
		}
		public build(): V1AssetDto {
			if (undefined == this.constructingInstance.id) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.constructingInstance.resource) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.constructingInstance.locationLink) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()

			return this.constructingInstance
		}
	}
}
