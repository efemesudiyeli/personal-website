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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, SearchCode } from "../node_modules/lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className={`${styles.swiper} my-3`}
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
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiperSlide}  text-secondary`}>
          <div className="flex flex-col justify-between items-center h-44  py-5 px-7 border rounded-lg">
            <div>
              <h3 className="text-primary font-extrabold text-2xl">Header</h3>
            </div>

            <div className="text-primary/60 text-sm font-light h-12 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, cum.asdasdasdasdasdasdasdasdasdasds
            </div>

            <div className="w-full mt-4">
              <Link href={"/"}>
                <Button className="w-full flex gap-2">
                  <SearchCode size={16} /> Inspect
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
