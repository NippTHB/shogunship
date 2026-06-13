import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const PixelButton = forwardRef(function PixelButton(
  { className, variant = 'default', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative inline-flex items-center justify-center border-[4px] border-foreground px-6 py-4 font-display text-xl uppercase tracking-wider shadow-xs transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        {
          'bg-white text-foreground': variant === 'default',
          'bg-primary text-primary-foreground': variant === 'primary',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
        },
        className,
      )}
      {...props}
    />
  );
});

export { PixelButton };
