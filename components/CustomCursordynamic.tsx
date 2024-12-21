import dynamic from "next/dynamic";

// Dynamically import the CustomCursor component
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });

export default function CustomCursordynamic() {
  return (
    <div>
      {/* Render the CustomCursor dynamically */}
      <CustomCursor />
    </div>
  );
}
