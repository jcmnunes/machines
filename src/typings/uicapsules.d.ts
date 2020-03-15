declare module '@binarycapsule/ui-capsules' {
  import React from 'react';

  interface ButtonProps {
    appearance: string;
    iconBefore: string;
    onClick(): void;
  }

  export const WithToasts = React.FC;
  export const theme: Record<string, string | number>;
  export const Button: React.FC<ButtonProps>;
}
