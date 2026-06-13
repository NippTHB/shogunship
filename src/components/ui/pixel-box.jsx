import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const PixelBox = forwardRef(function PixelBox(
  { className, variant = 'default', doubleBorder = false, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative border-[4px] border-foreground shadow-sm',
        {
          'bg-card text-card-foreground': variant === 'default',
          'bg-primary text-primary-foreground': variant === 'primary',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'bg-muted text-muted-foreground': variant === 'muted',
          'p-1': doubleBorder,
        },
        className,
      )}
      {...props}
    >
      {doubleBorder ? (
        <div className="h-full w-full border-[2px] border-foreground bg-inherit p-4">{children}</div>
      ) : (
        <div className="h-full w-full bg-inherit p-4">{children}</div>
      )}
    </div>
  );
});

export { PixelBox };
