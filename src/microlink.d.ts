declare module '@microlink/react' {
  import { FC, CSSProperties } from 'react';

  interface MicrolinkProps {
    url: string;
    size?: 'small' | 'normal' | 'large';
    style?: CSSProperties;
    className?: string;
    media?: string | string[];
    direction?: 'ltr' | 'rtl';
    apiKey?: string;
    // 必要に応じて他のプロパティも追加可能
  }

  const Microlink: FC<MicrolinkProps>;
  export default Microlink;
}
