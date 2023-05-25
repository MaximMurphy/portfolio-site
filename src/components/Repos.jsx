import { useEffect, useState } from "react";
import { getRepos } from "@/pages/api/repos";
import RepoList from "./RepoList";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await getRepos();
      setRepos(repoData);
    };

    fetchRepos();
  }, []);

  return <RepoList repos={repos} />;
};

export default Repos;
