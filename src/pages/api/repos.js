import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export const getRepos = async () => {
  const response = await octokit.request("GET /users/maximmurphy/repos", {
    username: "maximmurphy",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data; // extract the data from the response
};
