import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("opacity-0 invisible", className)}
      {...props}
    />
  )
}

export { Skeleton }
