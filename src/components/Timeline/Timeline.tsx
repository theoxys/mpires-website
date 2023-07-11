import { professionalExperience } from "@/content/contents";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  return (
    <div className="flex flex-col gap-1">
      {professionalExperience.map((company, index) => (
        <TimelineItem
          key={index}
          companyName={company.companyName}
          workingDate={company.workingDates}
          description={company.description}
          logo={company.logo}
        />
      ))}
    </div>
  );
};
