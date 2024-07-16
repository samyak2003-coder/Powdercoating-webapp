"use client"
import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import YellowButton from "../../components/button/YellowButton";
import GreyButton from "../../components/button/GreyButton";
import { prisma } from "../../../lib/prisma"

export default async function Database() {
  const product = await prisma.product.findFirst({
    where: {

    }
  })
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-10">
        <GreyButton text="Main Page" href="/" />
        <YellowButton text="Database" href="/database" />
      </div>

    </>
  );
}



