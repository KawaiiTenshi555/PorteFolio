import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-red-700 py-6 text-center md:justify-between bottom-0 bg-gray-600 mt-auto">
      <Typography color="blue-gray" className="font-normal text-white lg:px-3">
        &copy; 2023 Téophile Chardon
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 lg:px-3">
        <li>
          <Typography
            as="a"
            href="/about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
            Contact Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://github.com/KawaiiTenshi555"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
            Github
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.linkedin.com/in/t%C3%A9ophile-chardon-90a69b27b/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
            Linkedin
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
