/* eslint-disable @next/next/no-img-element */

import Carousel from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-7xl ">Welcome</h1>
        <span>to a basic </span>
        <strong className=" text-red-400 underline text-xl">
          {" "}
          <a href="https://nextjs.org/">Next.JS</a>{" "}
        </strong>
        <span>Project</span>
      </div>
      <Carousel />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit nam
        saepe beatae voluptate, doloremque eos nemo dolore voluptatum qui
        assumenda iure animi nesciunt. Corrupti dicta exercitationem repudiandae
        provident quasi.
      </p>
      <div className="flex justify-evenly flex-wrap gap-y-20">
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </main>
  );
}
