export class Record {
    public jsonClass:string ='Record'
    
    constructor(fields: object = {}) {
        Object.assign(this, fields);
    }
}
