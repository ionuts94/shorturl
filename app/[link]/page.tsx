import React from 'react';
import { getData } from '@/libs/helpers';

interface LinkPageProps {
  params: {
    link: string;
  };
}

const LinkPage: React.FC<LinkPageProps> = async ({ params }) => {
  const { link } = params;

  const resp = await getData({
    url: 'http://localhost:3000/api/get-link',
    data: {
      name: link
    }
  });
  console.log(resp);

  return <div>Link page</div>;
};

export default LinkPage;
