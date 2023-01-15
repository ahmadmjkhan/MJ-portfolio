import React from "react";
import "./testimonial.css";
import ME from "../../assets/me.jpg";
import DEEPU from "../../assets/deepu.jpg";
import Hamza from "../../assets/hamza.jpg";


import { Autoplay, Pagination, Navigation } from "swiper";
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
const data = [
  {
    id:11,
    avatar: DEEPU,
    name: "Deepchandra Yadav",
    review: "I have Worked on Asp.net Platform but, I'm Delight to said that we collabrated with each other in every website Development",
  },
  {
    id:12,
    avatar: Hamza,
    name: "Hamza",
    review: "I have both Studies in Graduation and work with each other, he was helped me a lot in every situation i have hung in code complexity problem",
  },
  {
    id:11,
    avatar: DEEPU,
    name: "Deepchandra Yadav",
    review: "We have together studied and manage all the session of programming during classa and sloved every problem",
  },
  {
    id:12,
    avatar: Hamza,
    name: "Hamza",
    review: "We have done a project in final year of MCA in wordpress Technologies. and create a wonderful website and passed out",
  },
 
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Autoplay, Pagination, Navigation]}
       spaceBetween={40}
       slidesPerView={2}
       autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
       pagination={{clickable:true}}
      
      >
        {data.map(({id, avatar, name, review}) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
