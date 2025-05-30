export interface TourRequestDto {
	name: string;
	description: string;
	duration: string;
	price: number;
	thumbnail: string;
	categoryId: string;
}

export interface TourScheduleRequestDto {
	tourScheduleId: string;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	adultPrice: number;
	childPrice: number;
	babyPrice: number;
	slot: number;
	tourId: string;
}

export interface TourImageRequestDto {
	tourId: string;
	imageUrl: string;
	description: string | "";
}

export interface TourDestinationRequestDto {
	tourId: string;
	name: string;
	description: string;
}

export interface CreateTourDto {
	name: string;
	description: string;
	duration: string;
	price: number;
	thumbnail: string;
	categoryId: string;
}

export interface UpdateTourDto {
	name: string;
	description: string;
	price: number;
	thumbnail: string;
	duration: string;
	categoryId: string;
}

export interface CreateTourImageDto {
	file: File;
	tourId: string;
	description: string | "";
	orderIndex: number | 1;
}

export interface CreateTourScheduleDto {
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	adultPrice: number;
	childPrice: number;
	babyPrice: number;
	slot: number;
	tourId: string;
}

export interface UpdateTourScheduleDto {
	tourScheduleId: string;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	adultPrice: number;
	childPrice: number;
	babyPrice: number;
	slot: number;
	tourId: string;
}

export interface CreateTourDestinationDto {
	name: string;
	description: string;
	orderIndex: number;
	tourId: string;
	destinationId: string;
}

export interface UpdateTourDestinationDto {
	name: string;
	description: string;
	orderIndex: number;
	tourId: string;
	destinationId: string;
}
