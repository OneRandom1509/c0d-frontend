import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";

const linkButtonVariants = cva(
  "px-6 py-3 font-orbitron text-lg font-bold rounded-[16px] transition-all",
  {
    variants: {
      variant: {
        primary:
          "text-red-500 hover:text-white [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
        secondary:
          "text-gray-400 hover:text-red-500 hover:[text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  className?: string;
  text?: string;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ text, className, variant = "primary", href, ...other }, ref) => {
    const commonProps = {
      ref,
      className: cn(linkButtonVariants({ variant }), className),
      ...other,
    };

    return (
      <Link href={href} {...other}>
        <span {...commonProps}>{text}</span>
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
