import React from 'react';

interface LinkPageProps {
  params: {
    link: string;
  };
}

const LinkPage: React.FC<LinkPageProps> = ({ params }) => {
  console.log(params);
  return <div>Link page</div>;
};

export default LinkPage;
