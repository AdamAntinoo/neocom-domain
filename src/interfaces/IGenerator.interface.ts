/**
 * Interface to define the link generatios for the different universe entities.
 */
export interface IGenerator {
	generate(identifier: number | string): string
}
