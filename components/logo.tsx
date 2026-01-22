interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ size = "md", showTagline = false, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-7xl",
  };

  const taglineSizes = {
    sm: "text-xs",
    md: "text-sm md:text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative inline-block">
        <span
          className={`${sizeClasses[size]} font-sans font-semibold tracking-tight bg-gradient-to-b from-[#2D6B5A] to-[#5FB8A0] bg-clip-text text-transparent`}
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          kares.ai
        </span>
        {/* Underline full width under "kares.ai" */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2D6B5A] to-[#5FB8A0]"
          style={{ transform: "translateY(2px)" }}
        />
      </div>
      {showTagline && (
        <p 
          className={`${taglineSizes[size]} italic mt-2 text-[#3D8B7A]`}
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          ai coach & doctor for all things health & wellness
        </p>
      )}
    </div>
  );
}
