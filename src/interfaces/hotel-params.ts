export default interface HotelParams {
	location: string
	starRange: [ number, number ]
	minPrice: number
	maxPrice: number
	sortBy: string
	sortDesc: boolean
	pageNumber: number
}
