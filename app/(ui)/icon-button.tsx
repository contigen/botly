import { Button } from "@nextui-org/button"
import { ComponentProps as IconButtonProps } from "./types/component.type"

export function IconButton({
  className,
  children,
}: IconButtonProps & { className?: string }) {
  return (
    <Button isIconOnly className={`bg-transparent ${className}`}>
      {children}
    </Button>
  )
}
