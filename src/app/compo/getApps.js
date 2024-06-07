
export default async function getApps() {
  let apps = await fetch("https://gp.forn.fun/api/apps");
    let appsJson = await apps.json();
    return appsJson;
}
