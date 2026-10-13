import { IConverter } from "./IConverter.interface";

export class NoActionConverter <T> implements IConverter<any, T>{
  convert(source: any): T {
    return source as T
  }
}
