import { Record } from "../interfaces/Record.interface"

/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export class V1EsiTypeDto extends Record {
    public override jsonClass: string = 'EsiTypeDto'
    public typeId?: number
    public name?: string
    public description?: string
    public iconId?: number
    public groupId?: number
    public groupName?: string
    public categoryId?: number
    public categoryName?: string
    public volume?: number
    public marketDataLink?: string
}
