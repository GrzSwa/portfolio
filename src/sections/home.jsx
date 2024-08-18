import React from "react";
import { HelloContainer } from "../components/homeSection/helloContainer";
import { AvatarContainer } from "../components/homeSection/avatarContainer";
import { useDataProvider } from "../provider/dataProvider";
import "../styles/styles.css";

const Home = () => {
  const data = useDataProvider().getHomeData();

  return (
    <section
      className="sections min-w-full pt-24 md:min-h-lvh lg:min-h-[50vh] lg:pt-44 xl:min-h-lvh xl:pt-24 4k:min-h-[60vh]  flex flex-1 bg-background-primary dark:bg-background-primary-dark"
      id="home"
    >
      <div className="m-auto max-w-[90%] xl:max-w-[80%] 4k:max-w-[1500px] grid lg:grid-cols-3">
        <div className=" order-last lg:order-first lg:col-span-2 ">
          <HelloContainer {...data} />
        </div>
        <div className="order-first lg:order-last flex justify-center lg:justify-end">
          <AvatarContainer avatar={data.avatar} />
        </div>
      </div>
    </section>
  );
};

export default Home;
