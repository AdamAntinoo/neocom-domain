export interface IConverter<S, D> {
    convert(source: S): D
}
