import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number;
  gap?: string | number;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  const { padding, gap, className = "", children, ...other } = props;

  const convertedPadding = typeof padding === "string" && padding.match(/[a-zA-Z]/) ? padding : `${padding}px`;
  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

  const cardHeaderStyles = {
    padding: convertedPadding ? convertedPadding : undefined,
    gap: convertedGap ? convertedGap : undefined,
    ...other.style,
  };

  return (
    <div ref={ref} className={cn(className)} style={cardHeaderStyles} {...other}>
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

export default CardFooter;
