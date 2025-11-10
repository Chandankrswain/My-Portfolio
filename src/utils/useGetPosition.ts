import { useEffect, useState } from "react";

export const useGetPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useGetPosition;
