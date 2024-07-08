import { max_animation_speed, min_animation_speed } from "@/app/lib/utils";

export const Slider = ({
  min = min_animation_speed,
  max = max_animation_speed,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (value: number) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-center text-gray-300">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        disabled={isDisabled}
        className="w-full h-2 rounded-lg appearances-none cursor-pointer bg-gray-700"
      />
      <span className="text-center text-gray-300">Fast</span>
    </div>
  );
};
