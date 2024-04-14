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
        <div className='h-[630px]'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>
                            <div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <img src="https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='bg-gradient-to-r from-black to-black absolute w-full h-full flex justify-center items-center opacity-80 font-roboto text-white'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='flex items-center gap-4 text-center'><span className='text-5xl'>Find Nearby Jobs</span> <span className='text-[#54ff98] lg:text-2xl'><TextAnimation /></span></h1>
                            <h1 className='font-roboto mt-3'>Unlocking Opportunities, Building Careers, Shaping Tomorrow's Workforce Together.</h1>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;