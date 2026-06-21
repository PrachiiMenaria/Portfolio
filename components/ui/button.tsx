import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-text text-background hover:bg-text/90 shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 border border-transparent",
        primary: "bg-primary text-text hover:bg-primary-dark shadow-[0_4px_14px_0_rgb(212,181,176,0.2)] hover:shadow-[0_6px_20px_rgba(212,181,176,0.3)] hover:-translate-y-0.5 border border-transparent",
        secondary: "bg-secondary text-text hover:bg-secondary-light shadow-[0_4px_14px_0_rgb(222,214,232,0.2)] hover:shadow-[0_6px_20px_rgba(222,214,232,0.3)] hover:-translate-y-0.5 border border-transparent",
        outline: "border border-text/10 bg-transparent hover:bg-surface hover:border-text/20 hover:text-text shadow-sm hover:shadow-md hover:-translate-y-0.5",
        ghost: "hover:bg-text/5 hover:text-text",
        link: "text-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
