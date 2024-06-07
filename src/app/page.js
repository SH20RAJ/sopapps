import Image from "next/image";
import getApps from "./compo/getApps";
import AppCard from "./compo/AppCard";

export default async function Home() {
  let apps = await  getApps();
  apps = apps.results;
  return (
    <>
    <main>
      
      <div className="apps">
        <h1 className="text-4xl font-bold text-center">Apps</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

      {
        apps.map((app, index) => <AppCard key={index} app={app} />)
      }

          </div>
      </div>

    </main>

    {/* <AppCard/> */}
    </>
  );
}



