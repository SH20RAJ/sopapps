// import React from 'react';

import Link from "next/link";

const AppCard = ({app}) => {


return <>


<div className="w-1/4">
  <div className="flex flex-col  p-4">
    <Link href={`/app/${app.appId}`}>
    <div className="flex flex-col items-center">
      <img src={app.icon} alt="App Icon" className="app-icon mr-4 rounded-md" />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{app.title}</h2>
        <p className="text-gray-600">{app.developer.devId}</p>
      </div>
    </div>
    </Link>
    {/* <p className="text-gray-700 mt-2">{app.summary}</p> */}
  </div>
</div>

  
  </>
};

export default AppCard;
