import { V1MiningOperationDto } from '../dto/V1.MiningOperation.dto.js';

/**
 * @deprecated Use {@link IndustryPort} from `neocom-domain` `src/ports` with domain models
 * (`BlueprintV1`, …), not DTOs. Kept as a template until call sites migrate (BACK-SVC-040…042).
 */
export interface IndustryServiceInterface {
  getMiningOperations(token: string): Promise<V1MiningOperationDto[]>;
}
