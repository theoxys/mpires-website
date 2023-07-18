import { RepoCard, RepoProps } from "./RepoCard";

const repoUrl =
  "https://api.github.com/users/theoxys/repos?direction=desc&sort=updated&per_page=4";

export const RepoList = async () => {
  const repos = await fetch(repoUrl, {
    cache: "force-cache",
  });

  const data: RepoProps[] = await repos.json();
  console.log;

  return (
    <div className="flex flex-col gap-6 z-20 lg:flex-row mx-6">
      {data.length ? (
        data.map((repo, index) => (
          <RepoCard
            name={repo.name!}
            description={repo.description}
            language={repo.language}
            key={index}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
