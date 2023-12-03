document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/Gunjesh991")
    .then((response) => response.json())
    .then((profileData) => {
      displayProfile(profileData);
    })
    .catch((error) => console.error("Error fetching profile data:", error));

  fetch("https://api.github.com/users/Gunjesh991/repos")
    .then((response) => response.json())
    .then((reposData) => {
      displayRepositories(reposData);
    })
    .catch((error) => console.error("Error fetching repository data:", error));
});

function displayProfile(profileData) {
  const profileSection = document.getElementById("profile-section");

  profileSection.innerHTML = `
        <img src="${profileData.avatar_url}" />
        <h2>${profileData.name}</h2>
        <p class="bio">${profileData.bio}</p>
        <p>
            <a href="${profileData.html_url}" target="_blank">Github</a> |
            <a href="https://twitter.com/GunjeshBasnet" target="_blank">Twitter</a> |
            <a href="https://www.linkedin.com/in/gunjesh-basnet/" target="_blank">LinkedIn</a>
        </p>
    `;
}

function displayRepositories(reposData) {
  const repositoriesList = document.getElementById("repositories-list");

  reposData.forEach((repo) => {
    const repoItem = document.createElement("div");
    repoItem.classList.add("repository-item");
    repoItem.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>Made with: ${repo.language || "Not specified"}</p>
            <p>Rating: ${repo.stargazers_count}</p>
            <p><a href="${repo.html_url}" target="_blank">View Repository</a></p>
        `;
    repositoriesList.appendChild(repoItem);
  });
}
