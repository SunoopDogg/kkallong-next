import { Typography } from 'antd';

interface Props {
  title: string | string[];
  separator?: string;
}

export default function PageTitle({ title, separator = '/' }: Props) {
  return (
    <Typography.Title
      level={3}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {Array.isArray(title) ? title.join(` ${separator} `) : title}
    </Typography.Title>
  );
}
