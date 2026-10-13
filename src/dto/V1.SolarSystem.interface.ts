import { V1Constellation } from "./V1.Constellation.interface"

export interface V1SolarSystem extends V1Constellation{
     solarSystemId?: number
     solarSystemName?: string
}
