import React from "react";
import "../App.css";
import Layout from "../components/layouts";
import projet1 from "../assets/portefolio.png";

function projet() {
  const products = [
    {
      id: 1,
      name: "PortFolio",
      href: "https://github.com/KawaiiTenshi555/PorteFolio",
      imageSrc:
        "https://cdn.discordapp.com/attachments/708291282048516106/1158381945215012994/tailwindlogo-removebg-preview.png?ex=651c0ac1&is=651ab941&hm=0b584a3552eba32a0ad838ebad95cd63ff62b90efe5304113dbcf80fabb25f96&",
      imageAlt: "Projet PortFolio réalisé en PreMsc",
    },

    // More products...
  ];
  return (
    <>
      <Layout namepage={"Projets"}>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.imageAlt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default projet;
