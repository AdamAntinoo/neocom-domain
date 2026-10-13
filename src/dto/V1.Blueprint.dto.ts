import { NeoComError } from "../exceptions/NeoComError"
import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { Record } from "../interfaces/Record.interface"
import { TypeLinkGenerator } from "../linkgenerators/TypeLink.generator"
import { V1StorageLocationDto } from "./V1.StorageLocation.dto"

/**
 * BlueprintDto
 * Will adapt the blueprints from the ESI api to the neocom domain.
 * {
    "item_id": 1015046088217,
    "location_flag": "Hangar",
    "location_id": 60006907,
    "material_efficiency": 10,
    "quantity": -2,
    "runs": 300,
    "time_efficiency": 0,
    "type_id": 1245
  },
 * 
 * @class V1BlueprintDto
 */
export class V1BlueprintDto extends Record {
	public override jsonClass: string = "BlueprintDto"
	public id?: number
	public typeLink?: string
	public storageLocation?: V1StorageLocationDto
	public materialEfficiency: number = 0
	public timeEfficiency: number = 0
	public runs: number = 1
	public original: boolean = false

	public static Builder = class Builder {
		public constructingInstance: V1BlueprintDto

		constructor(fields: object = {}) {
			this.constructingInstance = new V1BlueprintDto(fields)
		}

		public withId(id: number): Builder {
			this.constructingInstance.id = id
			return this
		}
		public withTypeLink(typeLink: number): Builder {
			this.constructingInstance.typeLink = new TypeLinkGenerator().generate(typeLink)
			return this
		}
		public withStorageLocation(location: V1StorageLocationDto): Builder {
			this.constructingInstance.storageLocation = location
			return this
		}
		public withEfficiency(material: number, time: number): Builder {
			this.constructingInstance.materialEfficiency = material
			this.constructingInstance.timeEfficiency = time
			return this
		}
		public withRuns(runs: number): Builder {
			if (runs < 0) this.constructingInstance.original = true
			this.constructingInstance.runs = runs
			return this
		}
		public build(): V1BlueprintDto {
			if (undefined == this.constructingInstance.id) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.constructingInstance.typeLink) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.constructingInstance.storageLocation) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()

			return this.constructingInstance
		}
	}
}
