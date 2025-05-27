"use client";
import Image from "next/image.js";
import Main from "./Main.jsx";
import Head from "next/head.js";
import React, { useState, Fragment } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Attendance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Main />
      </div>
    </>
  );
}
