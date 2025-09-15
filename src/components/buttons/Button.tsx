import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Button = ({
  isTooltip,
  handleClick,
  style,
  children,
  tooltipContent,
  tooltipContentStyle
}: ButtonProps) => {
  if (isTooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleClick} className={style}>
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent className={tooltipContentStyle}>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <button onClick={handleClick} className={style}>
      {children}
    </button>
  )
}

export default Button
