import { RepoList } from "@/components/RepoList/RepoList";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

export const RepositoriesSection = () => {
  return (
    <div className="flex flex-col w-full min-h-full max-w-7xl relative items-center">
      <SectionTitle>My last repos</SectionTitle>
      <RepoList />

      <div className="absolute w-[400px] h-[500px] rounded-full bg-gradient-to-br from-transparent via-sky-700 to-emerald-700 blur-[72px] opacity-[17%] -right-[15%] -top-[20%] z-10" />
    </div>
  );
};
