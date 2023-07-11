import { ComponentType } from "react";

interface SliderItemProps {
  name: string;
  icon: ComponentType;
}

export const SliderItem = ({ name, icon: StackIcon }: SliderItemProps) => {
  return (
    <div className="keen-slider__slide flex gap-4 items-center h-24">
      <StackIcon />
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
};
