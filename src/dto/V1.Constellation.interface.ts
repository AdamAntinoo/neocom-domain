import { V1Region } from "./V1.Region.interface"

/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export interface V1Constellation extends V1Region {
    constellationId?: number
    constellationName?: string
}
