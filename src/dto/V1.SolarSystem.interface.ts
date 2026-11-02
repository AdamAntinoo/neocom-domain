import { V1Constellation } from "./V1.Constellation.interface"

/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export interface V1SolarSystem extends V1Constellation{
     solarSystemId?: number
     solarSystemName?: string
}
