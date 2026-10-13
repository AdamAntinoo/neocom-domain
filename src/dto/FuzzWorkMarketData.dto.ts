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
