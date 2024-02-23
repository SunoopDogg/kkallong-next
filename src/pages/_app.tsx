import { client } from '@/api/reactQuery';
import { QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import { antdThemeConfig } from '@/theme/config';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={koKR} theme={antdThemeConfig}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
