import { ESI_CONSTANTS } from "../conf/GlobalConstants";
import { IGenerator } from "../interfaces/IGenerator.interface";

export class TypeLinkGenerator implements IGenerator {
	generate(identifier: string | number): string {
		return ESI_CONSTANTS.BACKEND_ESI_V3_PREFIX + ESI_CONSTANTS.BACKEND_ESI_TYPE + identifier
	}
}
