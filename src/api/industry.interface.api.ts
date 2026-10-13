import { V1MiningOperationDto } from "../dto/V1.MiningOperation.dto";

export interface IndustryServiceInterface {
	getMiningOperations(token: string): Promise<V1MiningOperationDto[]>
}
