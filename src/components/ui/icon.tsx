import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const LucideIcon = Icons[name] || Icons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;
