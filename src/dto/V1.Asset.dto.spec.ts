import { Builder } from "builder-pattern"
import { V1AssetDto } from "./V1.Asset.dto"
import { V1StackDto } from "./V1.Stack.dto"

describe("DTO V1AssetDto [Module: neocom-domain - Version: v3]", () => {
	// - C O N S T R U C T I O N   P H A S E
	describe("Constructor Contract Phase", () => {
		test("Should be created", () => {
			console.log("><[V1AssetDto]> should be created")
			expect(new V1AssetDto()).toBeDefined()
		})
		test("when constructed with no data", () => {
			try {
				new V1AssetDto.Builder().build()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("when constructed with all data", () => {
			const sut: V1AssetDto = new V1AssetDto.Builder({
				jsonClass: "AssetDto",
				id: 10,
				resource: Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build(),
				locationLink: "http://localhost:8080/asset/10",
			}).build()
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("AssetDto")
			expect(sut.id).toBe(10)
			expect(sut.resource).toBeDefined()
			expect(sut.locationLink).toBe("http://localhost:8080/asset/10")
		})
		test("when constructed with partial data", () => {
			const sut: V1AssetDto = new V1AssetDto.Builder({
				id: 1000,
			})
				.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
				.withLocationLink("http://localhost:8080/asset/1000")
				.build()
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("AssetDto")
			expect(sut.id).toBe(1000)
			expect(sut.resource).toBeDefined()
			expect(sut.locationLink).toBe("http://localhost:8080/asset/1000")
		})
		test("when constructed with builder", () => {
			const sut: V1AssetDto = new V1AssetDto.Builder()
				.withId(10000)
				.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
				.withLocationLink("http://localhost:8080/asset/10000")
				.build()
			expect(sut).toBeDefined
			expect(sut.jsonClass).toBe("AssetDto")
			expect(sut.id).toBe(10000)
			expect(sut.resource).toBeDefined()
			expect(sut.locationLink).toBe("http://localhost:8080/asset/10000")
		})
	})
	describe("Constructor Buoldfer failure Phase", () => {
		test("When id is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder()
					.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
					.withLocationLink("http://localhost:8080/asset/10000")
					.build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("When id is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder({
					id: null,
				})
					.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
					.withLocationLink("http://localhost:8080/asset/10000")
					.build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("When locationLink is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder()
					.withId(10000)
					.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
					.build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("When locationLink is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder({
					locationLink: undefined,
				})
					.withId(10000)
					.withResource(Builder<V1StackDto>().quantity(10).typeLink("http://localhost:8080/stack/10").build())
					.build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("When resource is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder().withId(10000).withLocationLink("http://localhost:8080/asset/10000").build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
		test("When resource is missing", () => {
			try {
				const sut: V1AssetDto = new V1AssetDto.Builder({
					resource: undefined,
				})
					.withId(10000)
					.withLocationLink("http://localhost:8080/asset/10000")
					.build()
				expect(sut).toBeUndefined()
			} catch (e: any) {
				expect(e.message).toEqual("A mandatory field on a Builder is missing.")
			}
		})
	})
})
