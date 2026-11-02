import { V1SolarSystem } from "./V1.SolarSystem.interface"

/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export interface V1Station extends V1SolarSystem {
    stationId?: number
    stationName?: string
    securityClass?: string
    securityStatus?: number
}
