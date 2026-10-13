import { Record } from "../interfaces/Record.interface"

export interface NeoComErrorDefinition{
     httpCode?: number
     code?: string
     messagePattern?: string
}

export class NeoComSharedErrorDefinition extends Record implements NeoComErrorDefinition{
    public override jsonClass:string='NeoComErrorDefinition'
    httpCode?: number
    code?:string
    messagePattern?: string
}

export const TOKEN_NOT_PRESENT:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 401,
    code: "TOKEN-NOT-PRESENT",
    messagePattern: "The authentication token is not present or invalid so the request is not authorized."
})
export const TOKEN_INVALID:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 401,
    code: "TOKEN-INVALID",
    messagePattern: "The authentication token is not valid because does not declare a correct subject."
})
export const MANDATORY_FIELD_MISSING:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 500,
    code: "MANDATORY-FIELD-MISSING",
    messagePattern: "A mandatory field on a Builder is missing."
})
export const REQUEST_INVALID:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 400,
    code: "REQUEST-INVALID",
    messagePattern: "Missing required parameter."
})
export const TYPE_INVALID:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 401,
    code: "TYPE-INVALID",
    messagePattern: "The requested EVE type is not present or invalid."
})
export const LOCATION_INVALID:NeoComErrorDefinition=new NeoComSharedErrorDefinition({
    httpCode: 401,
    code: "LOCATION-INVALID",
    messagePattern: "The requested location is not present or invalid."
})
