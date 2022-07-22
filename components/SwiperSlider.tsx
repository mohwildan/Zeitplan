import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Slider from "./Slider";
import ImageProfile1 from "../public/user/unsplash_5rQG1mib90I.png";

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      grabCursor={true}
      slidesPerView={1}
      style={{ marginTop: "3.5rem", paddingLeft: "0.5rem" }}
    >
      <SwiperSlide>
        <Slider
          name="P-Star 7"
          img={ImageProfile1}
          desc="Mahasiswa  Boating School Ny, Puff"
        >
          “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas
          Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima
          kasih garena!”
        </Slider>
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          name="P-Star 7"
          img={ImageProfile1}
          desc="Mahasiswa  Boating School Ny, Puff"
        >
          “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas
          Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima
          kasih garena!”
        </Slider>
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          name="P-Star 7"
          img={ImageProfile1}
          desc="Mahasiswa  Boating School Ny, Puff"
        >
          “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas
          Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima
          kasih garena!”
        </Slider>
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          name="P-Star 7"
          img={ImageProfile1}
          desc="Mahasiswa  Boating School Ny, Puff"
        >
          “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas
          Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima
          kasih garena!”
        </Slider>
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          name="P-Star 7"
          img={ImageProfile1}
          desc="Mahasiswa  Boating School Ny, Puff"
        >
          “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas
          Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima
          kasih garena!”
        </Slider>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
