import { V1AssetDto } from '../dto/V1.Asset.dto.js';
import { V1BlueprintDto } from '../dto/V1.Blueprint.dto.js';

/**
 * @deprecated Use {@link PilotPort} from `neocom-domain` `src/ports` with domain models
 * (`PilotV2`, `BlueprintV1`), not DTOs. Kept as a template until call sites migrate (BACK-SVC-040…042).
 */
export interface CharacterServiceInterface {
  getCharactersCharacterIdBlueprints(token: string, sessionid: string): Promise<V1BlueprintDto[]>;
  getCharactersCharacterIdAssets(token: string, sessionid: string): Promise<V1AssetDto[]>;
}
