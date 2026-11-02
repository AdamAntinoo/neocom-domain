/**
 * @deprecated Domain DTOs are not active interchange / port contracts (BACK-SVC-040…042). Prefer `src/domain` models. Kept as templates / for later removal.
 */
export interface MarketData {
    weightedAverage: number
    max: number
    min: number
    stddev: number
    median: number
    volume: number
    orderCount: number
    percentile: number
}
export interface FuzzWorkMarketData {
    buy: MarketData,
    sell: MarketData
}
