import { Record } from "../interfaces/Record.interface"

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
