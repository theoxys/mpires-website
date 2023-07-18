import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

interface SliderItemProps {
  name: string;
  icon: ComponentType<LucideProps>;
}

export const SliderItem = ({ name, icon: StackIcon }: SliderItemProps) => {
  return (
    <div className="keen-slider__slide flex gap-2 lg:gap-4 items-center h-24">
      <StackIcon className="h-[20px]" />
      <span className="text-md md:text-lg font-medium">{name}</span>
    </div>
  );
};
