import AppCard from "@/app/compo/AppCard";
import Nav from "@/app/compo/Nav";


const AppPage = async ({params}) => {
  let id = params.id;
  let app = await fetch(`http://gp.forn.fun/api/apps/${id}`);
  let appDetails = await app.json();


  let apps = await fetch("https://gp.forn.fun/api/apps/"+id+"/similar");
  apps = await apps.json();
  apps = apps.results;


  return (
    <>
    <Nav/>
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src={appDetails.icon} alt={`${appDetails.title} icon`} className="w-60 h-60 mb-4" />
        <h1 className="text-4xl font-bold mb-4">{appDetails.title}</h1>
        <img src={appDetails.headerImage} alt={`${appDetails.title} header`} className="w-full h-60 object-cover mb-4" />
        <p className="text-lg mb-4" dangerouslySetInnerHTML={{__html : appDetails.descriptionHTML}}></p>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2">Screenshots</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {appDetails.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-60 object-cover" />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2">Details</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Summary: {appDetails.summary}</li>
            <li>Installs: {appDetails.installs}</li>
            <li>Rating: {appDetails.scoreText} ({appDetails.ratings} ratings)</li>
            <li>Price: {appDetails.priceText}</li>
            <li>Content Rating: {appDetails.contentRating}</li>
            <li>Version: {appDetails.version}</li>
            <li>Updated: {new Date(appDetails.updated).toLocaleDateString()}</li>
            <li>Developer: {appDetails.developer.devId}</li>
            <li><a href={appDetails.developer.url} target="_" className="text-blue-500">More apps by this developer</a></li>
            <li><a href={appDetails.privacyPolicy} target="_" className="text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2">Reviews</h2>
          <a href={appDetails.reviews} target="_" className="text-blue-500">Read Reviews</a>
        </div>
      </div>
    </div>
    <div className="download text-center text-8xl">
      <a href={
        appDetails.playstoreUrl
      } target="_" className="bg-blue-500 text-white px-4 py-2 rounded-md">Download</a>
    </div>
    <div className="suggesion">
      <h1 className=" text-4xl ">Suggested Apps</h1>
    <div className="flex flex-wrap">
            {apps.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
    </div>
    </>
  );
};

export default AppPage;
