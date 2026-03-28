import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        variant === "default"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : variant === "outline"
            ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            : variant === "secondary"
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              : "hover:bg-accent hover:text-accent-foreground"
      } ${
        size === "default"
          ? "h-10 px-4 py-2"
          : size === "sm"
            ? "h-9 rounded-md px-3 text-sm"
            : size === "lg"
              ? "h-11 rounded-md px-8"
              : "h-10 w-10 rounded-md"
      } ${className || ""}`}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button }
