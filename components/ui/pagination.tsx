import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type * as React from "react"

interface PaginationLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: "default" | "sm"
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ children, className, ...props }) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-md border text-sm font-medium px-3 py-1.5 hover:bg-gray-100",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

export { PaginationLink, PaginationNext, PaginationPrevious }

