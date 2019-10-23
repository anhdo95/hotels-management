export const ACTIONS = {
	SET_HOTEL_LOCATIONS: 'SET_HOTEL_LOCATIONS',
	SET_HOTELS: 'SET_HOTELS',
}

export const RESPONSE_STATUS = {
	SUCCESS: 200,
}

export const SEARCH_DEBOUNCE_IN_MS = 500

export const ITEM_PER_PAGE = 20

export const STAR_SLIDER: any = {
	KEY_TO_VALUE: {
		0: 0,
		20: 1,
		40: 2,
		60: 3,
		80: 4,
		100: 5,
	},
	VALUE_TO_KEY: {
		0: 0,
		1: 20,
		2: 40,
		3: 60,
		4: 80,
		5: 100,
	},
}

export const REGEX = {
  NUMBER_TO_CURRENCY_FORMAT: /\B(?=(\d{3})+(?!\d))/g,
  CURRENCY_TO_NUMBER_FORMAT: /\$\s?|(,*)/g
}
