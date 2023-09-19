import { ClipLoader } from "react-spinners";

interface Props {
  size?: number;
  color?: string;
}

export default function Loader({ size = 24, color = "#4f46e5" }: Props) {
  return <ClipLoader color={color} size={size} data-testid="loader" />;
}
