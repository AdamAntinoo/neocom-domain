import { V1MarketDataDto } from "./V1.MarketData.dto"

describe('DTO V1MarketDataDto [Module: neocom-domain - Version: v3]', () => {
    // - C O N S T R U C T I O N   P H A S E
    describe('Constructor Contract Phase', () => {
        test('Should be created', () => {
            console.log('><[V1MarketDataDto]> should be created')
            expect(new V1MarketDataDto()).toBeDefined()
        })
        test('when constructed with no data', () => {
            try {
                new V1MarketDataDto.Builder().build()
            } catch (e: any) {
                expect(e.message).toEqual('A mandatory field on a Builder is missing.')
            }
        })
        test('when constructed with all data', () => {
            const sut: V1MarketDataDto = new V1MarketDataDto.Builder({
                buyOrderCount: 10,
                sellOrderCount: 20
            })
                .withBuyPrice(100.0)
                .withSellPrice(200.0)
                .build()
            expect(sut).toBeDefined
            expect(sut.jsonClass).toBe('MarketDataDto')
            expect(sut.buyPrice).toBe(100.0)
            expect(sut.sellPrice).toBe(200.0)
            expect(sut.buyOrderCount).toBe(10)
            expect(sut.sellOrderCount).toBe(20)
        })
        test('when constructed with partial data', () => {
            const sut: V1MarketDataDto = new V1MarketDataDto.Builder()
                .withBuyPrice(100.0)
                .withSellPrice(200.0)
                .build()
            expect(sut).toBeDefined
            expect(sut.jsonClass).toBe('MarketDataDto')
            expect(sut.buyPrice).toBe(100.0)
            expect(sut.sellPrice).toBe(200.0)
            expect(sut.buyOrderCount).toBe(0)
            expect(sut.sellOrderCount).toBe(0)
        })
    })
})
