import { NeoComError } from "../exceptions/NeoComError"
import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { Record } from "../interfaces/Record.interface"
import { LocationLinkGenerator } from "../linkgenerators/LocationLink.generator"

export class V1StorageLocationDto extends Record {
	public override jsonClass: string = "StorageLocationDto"
	public locationType: string = 'Hangar'
	public locationLink?: string

	public static Builder = class Builder {
		public constructingInstance: V1StorageLocationDto

		constructor(fields: object = {}) {
			this.constructingInstance = new V1StorageLocationDto(fields)
		}
		public withLocationType(locationType: string): Builder {
			this.constructingInstance.locationType = locationType
			return this
		}
		public withLocation(locationId: number): Builder {
			this.constructingInstance.locationLink = new LocationLinkGenerator().generate(locationId)
			return this
		}
		public build(): V1StorageLocationDto {
			if (undefined == this.constructingInstance.locationLink) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()

			return this.constructingInstance
		}
	}
}
