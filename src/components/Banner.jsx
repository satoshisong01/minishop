import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-70"></div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">미니 쇼핑몰</h2>
        <p className="text-2xl">아주좋은 제품을 구매해 보세요</p>
      </div>
    </section>
  );
}
