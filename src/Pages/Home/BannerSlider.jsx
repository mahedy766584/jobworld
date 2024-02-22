/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import TextAnimation from './TextAnimation';

const BannerSlider = () => {
    return (
        <div className='h-[680px]'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-50 text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-4xl'>Find Nearby Jobs</span> <span className='text-[#FF3811] opacity-100'><TextAnimation /></span></h1>
                            <h1>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/8547564/pexels-photo-8547564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;