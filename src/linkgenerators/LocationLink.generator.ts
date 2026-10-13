import { ESI_CONSTANTS } from "../conf/GlobalConstants";
import { IGenerator } from "../interfaces/IGenerator.interface";

export class LocationLinkGenerator implements IGenerator {
	generate(identifier: string | number): string {
		return ESI_CONSTANTS.BACKEND_ESI_V1_PREFIX + ESI_CONSTANTS.BACKEND_ESI_SPACE_LOCATION + identifier
	}
}
