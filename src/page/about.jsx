import React from "react";
import "../App.css";
import Layout from "../components/layouts";

function about() {
  const posts = [
    {
      id: 1,
      title: "BAC S",
      href: "https://saintpierresaintpaul.fr/",
      description:
        "Mon parcours en baccalauréat scientifique avec spécialité Informatique et Sciences du Numérique (ISN) a façonné mon intérêt pour le développement informatique, orientant ainsi mes études supérieures et ma future carrière.",
      date: "2018-2020",
      datetime: "2020-03-16",
      category: { title: "Terminé", href: "#" },
    },
    {
      id: 1,
      title: "BTS SNIR",
      href: "https://www.st-joseph-lorient.org/",
      description:
        "Mon choix de BTS SNIR (Services Informatiques aux Organisations) a été déterminé par ma passion pour l'informatique et l'aspiration à acquérir des compétences avancées pour répondre aux besoins technologiques des entreprises.",
      date: "2021-2023",
      datetime: "2020-03-16",
      category: { title: "Terminé", href: "#" },
    },
    {
      id: 1,
      title: "Pré-MSC Epitech",
      href: "https://www.epitech.eu/fr/ecole-informatique-rennes/",
      description:
        "Mon choix de pré-MSC à Epitech s'inscrit dans ma volonté de perfectionner mes compétences en informatique et de me préparer de manière intensive pour intégrer le Master of Science in Computer Science (MSC).",
      date: "2023-?",
      datetime: "2020-03-16",
      category: { title: "En cours", href: "#" },
    },
  ];
  return (
    <>
      <Layout namepage={"A propos"}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Etudes et parcours
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-red-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between  border border-red-700 p-12 rounded-lg shadow-xl hover:shadow-2xl hover:border-2"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5  text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </Layout>
      
    </>
  );
}
export default about;
