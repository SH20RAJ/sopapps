import Image from "next/image";
import getApps from "./compo/getApps";
import AppCard from "./compo/AppCard";
import Nav from "./compo/Nav";

export default async function Home() {
  let apps = await getApps();
  apps = apps.results;
  return (
    <>
    <Nav/>
      <main>
        <div className="apps">
          <h1 className="text-4xl font-bold text-center">Apps</h1>

          <div className="flex flex-wrap">
            {apps.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        </div>
      </main>

      {/* <AppCard/> */}
    </>
  );
}
