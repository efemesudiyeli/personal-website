"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import styles from "./styles/swiper.module.css";
// import required modules
import { Navigation } from "swiper/modules";

import { Button } from "@/components/ui/button";
import { SearchCode } from "../node_modules/lucide-react";
import Link from "next/link";

export default function Projects({ inspectButtonTranslate }: any) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className={`${styles.swiper} my-3 [--swiper-navigation-color:primary]`}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                Personal Portfolio Website
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              https://efemesudiyeli.dev is my personal website that i built by
              NextJS & ShadCDN
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center  h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                Spyquest - Find the Spy
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Dive into the exciting world of Spyquest, the ultimate social party game app.</div>

            <div className="w-full mt-4">
              <Link
                target="_blank"
                rel="noreferrer"
                href={"https://apps.apple.com/tr/app/spyquest-find-the-spy/id6572294458"}
              >
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                Traces of Death
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              This game was made for Brackeys Game Jam 2024.1 by 1 artist, 1 programmer and 1 composer people in 1 week. Theme: What&apos;s behind the door?
            </div>

            <div className="w-full mt-4">
              <Link
                target="_blank"
                rel="noreferrer"
                href={"https://github.com/efemesudiyeli/Traces-of-Death"}
              >
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide
          className={`${styles.swiperSlide}  text-secondary`} >
          <div className="flex flex-col justify-between items-center h-44 py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                WakePoint
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">Wake up at your destination! WakePoint uses your location to ensure you never miss your stop.</div>

            <div className="w-full mt-4">
              <Link target="_blank"
                rel="noreferrer" href={"https://github.com/efemesudiyeli/WakePoint"} className="">
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.swiperSlide}  text-secondary opacity-50`}
        >
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                Coming soon.
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip"></div>

            <div className="w-full mt-4">
              <Link href={"#"} className="pointer-events-none">
                <Button disabled className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.swiperSlide}  text-secondary opacity-50`}
        >
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">
                Coming soon.
              </h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip"></div>

            <div className="w-full mt-4 ">
              <Link href={"#"} className="pointer-events-none">
                <Button disabled className="w-full flex gap-2">
                  <SearchCode size={16} /> {inspectButtonTranslate}
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
