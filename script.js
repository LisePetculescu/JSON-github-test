"use-strict";

window.addEventListener("load", startApp);

async function startApp() {
  const race = await getGithubUser();
  showGitHubUser(race);
}

async function getGithubUser() {
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/race.json"
  );
  console.log(response);

  const data = await response.json();
  return data;
  console.log(data);
}

function showGitHubUser(user) {
  console.log(user);
  document.querySelector("#githubUser").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
        <article>
<h2>Name: ${user.name}</h2>
<p>Username: ${user.login}</p>
<p>bio: ${user.bio}</p>
</article> `
  );
}
