// import React from 'react';

import Link from "next/link";

const AppCard = ({app}) => {
  // app.
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <Link href={`/app/${app.appId}`}>
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={app.icon} alt={app.title} />
        </div>
        </Link>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{app.title}</div>
          <a href={app.developer.url} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {app.developer.devId}
          </a>
          <p className="mt-2 text-gray-500">{(app.summary)}</p>
          <div className="mt-4">
            <a href={app.playstoreUrl} className="text-indigo-600 hover:text-indigo-900">Play Store</a> |{" "}
            <a href={app.permissions} className="text-indigo-600 hover:text-indigo-900">Permissions</a> |{" "}
            <a href={app.reviews} className="text-indigo-600 hover:text-indigo-900">Reviews</a> |{" "}
            <a href={app.datasafety} className="text-indigo-600 hover:text-indigo-900">Data Safety</a>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-700 font-bold">{app.free ? "Free" : `${app.currency} ${app.price}`}</span>
            <span className="ml-auto text-yellow-500">Rating: {app.scoreText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
