import { LocationTypeEnum } from "./LocationType.enumerated"
import { V1BlueprintDto } from "./V1.Blueprint.dto"
import { V1StorageLocationDto } from "./V1.StorageLocation.dto"

describe("DTO V1BlueprintDto [Module: neocom-domain - Version: v3]", () => {
	// - C O N S T R U C T I O N   P H A S E
	describe("Constructor Contract Phase", () => {
		test("Should be created", () => {
			console.log("><[V1AssetDto]> should be created")
			expect(new V1BlueprintDto()).toBeDefined()
		})
		test("when constructed with no data", () => {
			try {
				new V1BlueprintDto.Builder().build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
	})
	describe("Builder Contract Phase", () => {
		test("when build with all standard fields copy blueprint", () => {
			const location: V1StorageLocationDto = new V1StorageLocationDto.Builder()
				.withLocationType(LocationTypeEnum.HANGAR)
				.withLocation(60006907)
				.build()
			const sut: V1BlueprintDto = new V1BlueprintDto.Builder()
				.withId(1012139393152)
				.withTypeLink(1540)
				.withStorageLocation(location)
				.withEfficiency(10, 20)
				.withRuns(12)
				.build()
			expect(sut).toBeDefined()
			expect(sut.id).toEqual(1012139393152)
			expect(sut.typeLink).toEqual("/api/v3/neocom/universe/types/1540")
			expect(sut.storageLocation).toEqual(location)
			expect(sut.materialEfficiency).toEqual(10)
			expect(sut.timeEfficiency).toEqual(20)
			expect(sut.runs).toEqual(12)
			expect(sut.original).toBeFalsy()
		})
		test("when build with all standard fields original blueprint", () => {
			const location: V1StorageLocationDto = new V1StorageLocationDto.Builder()
				.withLocationType(LocationTypeEnum.HANGAR)
				.withLocation(60006907)
				.build()
			const sut: V1BlueprintDto = new V1BlueprintDto.Builder()
				.withId(1012139393152)
				.withTypeLink(1540)
				.withStorageLocation(location)
				.withEfficiency(10, 20)
				.withRuns(-1)
				.build()
			expect(sut).toBeDefined()
			expect(sut.id).toEqual(1012139393152)
			expect(sut.typeLink).toEqual("/api/v3/neocom/universe/types/1540")
			expect(sut.storageLocation).toEqual(location)
			expect(sut.materialEfficiency).toEqual(10)
			expect(sut.timeEfficiency).toEqual(20)
			expect(sut.runs).toEqual(-1)
			expect(sut.original).toBeTruthy()
		})
	})
	describe("Builder Failures Phase", () => {
		test("when builder is missing mandatory fields", () => {
			try {
				new V1BlueprintDto.Builder().build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("when builder is missing id fields", () => {
			const location: V1StorageLocationDto = new V1StorageLocationDto.Builder()
				.withLocationType(LocationTypeEnum.HANGAR)
				.withLocation(60006907)
				.build()
			try {
				new V1BlueprintDto.Builder().withTypeLink(1540).withStorageLocation(location).withEfficiency(10, 20).withRuns(12).build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("when builder is missing typeLink fields", () => {
			const location: V1StorageLocationDto = new V1StorageLocationDto.Builder()
				.withLocationType(LocationTypeEnum.HANGAR)
				.withLocation(60006907)
				.build()
			try {
				new V1BlueprintDto.Builder().withId(1012139393152).withStorageLocation(location).withEfficiency(10, 20).withRuns(12).build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("when builder is missing storageLocation fields", () => {
			try {
				new V1BlueprintDto.Builder().withId(1012139393152).withTypeLink(1540).withEfficiency(10, 20).withRuns(12).build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
	})
})
