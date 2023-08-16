import { Button } from "@nextui-org/button"
import { ComponentProps as IconButtonProps } from "./types/component.type"

export function IconButton({children}: IconButtonProps) {
    return <Button isIconOnly className='bg-transparent'>
    {children}
  </Button>
}