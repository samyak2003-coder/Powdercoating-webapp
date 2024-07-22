"use client";
import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import YellowButton from "../../components/button/YellowButton";
import GreyButton from "../../components/button/GreyButton";

export default function Database() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?timestamp=${new Date().getTime()}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-10">
        <GreyButton text="Main Page" href="/" />
        <YellowButton text="Database" href="/database" />
      </div>
      <div className="container mx-auto mt-10">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <table className="min-w-full bg-black text-white">
            <thead>
              <tr>
                <th className="py-2 text-center">ID</th>
                <th className="py-2 text-center">Main Part No</th>
                <th className="py-2 text-center">Description</th>
                <th className="py-2 text-center">Area (sq. ft)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="py-2 text-center">{product.id}</td>
                  <td className="py-2 text-center">{product.mainPartNo}</td>
                  <td className="py-2 text-center">{product.description}</td>
                  <td className="py-2 text-center">{product.areaInSft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );

}