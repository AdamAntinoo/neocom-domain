import { Record } from "../interfaces/Record.interface"

/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export class V1SpaceLocationDto extends Record {
    public override jsonClass: string = 'SpaceLocationDto'
    public referenceType?: string // This is the real interface this instance represents. If can be Region-Constellation-System...
    public regionId?: number
    public regionName?: string
    public constellationId?: number
    public constellationName?: string
    public solarSystemId?: number
    public solarSystemName?: string
    public stationId?: number
    public stationName?: string
    public securityClass?: string
    public securityStatus?: number
}
