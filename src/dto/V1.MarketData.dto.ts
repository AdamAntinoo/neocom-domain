import { NeoComError } from "../exceptions/NeoComError"
import { MANDATORY_FIELD_MISSING } from "../exceptions/NeoComSharedErrorCatalog"
import { Record } from "../interfaces/Record.interface"

export class V1MarketDataDto extends Record {
    public override jsonClass: string = 'MarketDataDto'
    public buyPrice?: number
    public buyOrderCount?: number
    public sellPrice?: number
    public sellOrderCount?: number

    public static Builder = class Builder {
        public marketData: V1MarketDataDto

        constructor(fields: object = {}) {
            this.marketData = new V1MarketDataDto(fields)
            if ( undefined == this.marketData.buyOrderCount)this.marketData.buyOrderCount=0
            if ( undefined == this.marketData.sellOrderCount)this.marketData.sellOrderCount=0
        }

        public withBuyPrice(price: number): Builder {
            this.marketData.buyPrice = price
            return this
        }
        public withSellPrice(price: number): Builder {
            this.marketData.sellPrice = price
            return this
        }
        public build(): V1MarketDataDto {
            if (undefined == this.marketData.buyPrice) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()
            if (undefined == this.marketData.sellPrice) throw new NeoComError.Builder(MANDATORY_FIELD_MISSING).build()

            return this.marketData
        }
    }
}
