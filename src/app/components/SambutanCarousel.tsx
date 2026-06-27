'use client';
import { Sambutan } from '@/lib/types';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SambutanCard } from './SambutanCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function SambutanCarousel({ data }: { data: Sambutan[] }) {
	return (
		<Swiper
			speed={400}
			spaceBetween={30}
			loop
			centeredSlides
			pagination={{
				clickable: true,
			}}
			navigation
			modules={[Pagination, Navigation]}
			className="sambutan-swiper"
			breakpoints={{
				0: {
					slidesPerView: 1.05,
				},
				640: {
					slidesPerView: 1.2,
				},
				768: {
					slidesPerView: 1.5,
				},
				1024: {
					slidesPerView: 1.8,
				},
			}}>
			{data.map((item) => (
				<SwiperSlide key={item.id}>
					<SambutanCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
