import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from '../../image/courusel.png'
import img2 from '../../image/coursel-3.png'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const SwiperApp = () => {
  return (
    <div>
        <div className="coursel-title">
            <h1 className='primary-text'>Other Project</h1>
            <small>Other projects by us in different locations </small>
        </div><br />
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://bwhfdreamhome.com/sites/default/files/2022-09/BWHF%20DH%20-%20Grand%20Prize%20Dream%20Home.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/4/18/4/Original_Mike-Kelly-Dream-Home-2022-Warren-vermont-beauty.jpg.rend.hgtvcom.1280.853.suffix/1650394004533.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/9/30/0/HGTV_DH23_Pre-Load-In_220916_9479.jpg.rend.hgtvcom.966.644.suffix/1664560773990.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://www.hgtv.com/content/dam/images/hgtv/fullset/2022/11/10/0/dh23_front-yard-whole-house-high-DJI_0051_h.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://whyskylights.com/uploads/images/blog/home-exerior-black-pool-fall-leaves_2021-11-30-155444_kpqr.jpg'} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperApp