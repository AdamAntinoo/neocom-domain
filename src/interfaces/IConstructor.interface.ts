export interface IConstructor<In,Out>{
      construct(input: In): Promise<Out>
}
