import { V1MiningOperationDto } from "./V1.MiningOperation.dto"
import { V1StackDto } from "./V1.Stack.dto"

describe("DTO V1MiningOperationDto [Module: neocom-domain - Version: v3]", () => {
	// - C O N S T R U C T I O N   P H A S E
	describe("Constructor Contract Phase", () => {
		test("Should be created", () => {
			console.log("><[V1MiningOperationDto]> should be created")
			expect(new V1MiningOperationDto()).toBeDefined()
		})
		test("when constructed with no data", () => {
			try {
				new V1MiningOperationDto.Builder().build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("when constructed with builder", () => {
			const sut: V1MiningOperationDto = new V1MiningOperationDto.Builder()
				.withId("-test-id-")
				.withDate("2024/01/01")
				.withSolarSystemLink("-link-")
				.build()
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("MiningOperationDto")
			expect(sut.id).toBe("-test-id-")
			expect(sut.date).toBe("2024/01/01")
			expect(sut.solarSystemLink).toBe("-link-")
			expect(sut.getResources().length).toBe(0)
		})
		test("when constructed with builder resources", () => {
			const sut: V1MiningOperationDto = new V1MiningOperationDto.Builder()
				.withId("-test-id-")
				.withDate("2024/01/01")
				.withSolarSystemLink("-link-")

				.build()
				.addMiningResource(
					new V1StackDto({
						id: "-id-",
					})
				)
				.addMiningResource(
					new V1StackDto({
						id: "-id-",
					})
				)
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("MiningOperationDto")
			expect(sut.id).toBe("-test-id-")
			expect(sut.date).toBe("2024/01/01")
			expect(sut.solarSystemLink).toBe("-link-")
			expect(sut.getResources().length).toBe(2)
		})
		test("when constructed with partial data", () => {
			const sut: V1MiningOperationDto = new V1MiningOperationDto.Builder({
				solarSystemLink: "-link-",
			})
				.withId("-test-id-")
				.withDate("2024/01/01")
				.build()
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("MiningOperationDto")
			expect(sut.id).toBe("-test-id-")
			expect(sut.date).toBe("2024/01/01")
			expect(sut.solarSystemLink).toBe("-link-")
			expect(sut.getResources().length).toBe(0)
		})
	})
})
