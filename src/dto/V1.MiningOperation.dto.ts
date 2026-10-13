import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { NeoComError } from "../exceptions/NeoComError"
import { Record } from "../interfaces/Record.interface"
import { V1StackDto } from "./V1.Stack.dto"

/**
 * This class requires a builder because there are dependencies on other classes. If not object do not get the correct structure.
 * But probably this is not required on the way we expect to convert DTO into entities at the frontend. Review.
 */
export class V1MiningOperationDto extends Record {
	public override jsonClass: string = "MiningOperationDto"
	public id?: string
	public date?: string
	public solarSystemLink?: string
	public resources: V1StackDto[] = []

	public getResources(): V1StackDto[] {
		return this.resources
	}
	public addMiningResource(miningResource: V1StackDto): V1MiningOperationDto {
		this.resources.push(miningResource)
		return this
	}

	public static Builder = class Builder {
		public operation: V1MiningOperationDto

		constructor(fields: object = {}) {
			this.operation = new V1MiningOperationDto(fields)
		}
		public withId(id: string): Builder {
			this.operation.id = id
			return this
		}
		public withDate(date: string): Builder {
			this.operation.date = date
			return this
		}
		public withSolarSystemLink(link: string): Builder {
			this.operation.solarSystemLink = link
			return this
		}
		public build(): V1MiningOperationDto {
			if (undefined == this.operation.id) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.operation.date) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			if (undefined == this.operation.solarSystemLink) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
			return this.operation
		}
	}
}
