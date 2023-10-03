import React from "react";
import "./App.css";
import Layout from "./components/layouts";
function App() {
  const features = [
    {
      name: "HTML",
      description: "Plusieurs site réalisé en html",
    },
    {
      name: "CSS",
      description:
        "Base solide en css facilitant l'utilisation de framework css",
    },
    {
      name: "React",
      description: "Utilisation de react pour différent projet",
    },
    {
      name: "Tailwind",
      description: "Projet réalisé en tailwind",
    },
  ];

  return (
    <>
      <Layout namepage={"Portfolio"}>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Téophile Chardon
              </h2>
              <p className="mt-4 text-gray-500">
                Dev Front end, auto-entrepreneur, étudiant epitech
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
              <a href="https://developer.mozilla.org/fr/docs/Web/HTML">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl border hover:border-2 border-red-700 hover:shadow-2xl"
                />
              </a>
              <a href="https://developer.mozilla.org/fr/docs/Web/CSS">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl border hover:border-2 border-red-700 hover:shadow-2xl"
                />
              </a>
              <a href="https://fr.legacy.reactjs.org/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl  border hover:border-2 border-red-700 hover:shadow-2xl"
                />
              </a>
              <a href="https://tailwindcss.com/">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100 w-60 h-60 p-6 shadow-xl  border hover:border-2 border-red-700 hover:shadow-2xl"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
