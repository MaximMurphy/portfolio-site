import Link from "next/link";

const RepoList = ({ repos }) => {
  const recentRepos = repos.slice(repos.length - 4, repos.length); // Get the 4 most recent repositories

  return (
    <section className="w-full flex flex-col px-10 lg:px-24 py-12 lg:py-24 gap-12 tracking-wider text-cyan-950">
      <h1 className="text-cyan-950 text-lg font-semibold underline">
        Recent GitHub Repositories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-justify">
        {recentRepos.map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-offwhite-600 flex flex-col border-2 border-offwhite-800 rounded-xl gap-4 p-8"
          >
            <h3 className="font-semibold text-lg">{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="flex flex-row justify-between text-sm font-semibold">
              <p>{repo.language}</p>
              <p>{new Date(repo.updated_at).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RepoList;
