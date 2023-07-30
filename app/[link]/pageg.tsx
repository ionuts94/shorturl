"use client";

import React, { useEffect } from 'react';
import { getData } from '@/libs/helpers';
import { getEnvURL } from '@/libs/helpers';
import { useRouter } from 'next/navigation';
interface LinkPageProps {
  params: {
    link: string;
  };
}

const LinkPage: React.FC<LinkPageProps> = ({ params }) => {
  const { link } = params;
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const linkData = await getData({
        url: `${getEnvURL()}/api/get-link`,
        data: { shortCode: link }
      });

      if (linkData?.data?.rows?.length === 0) {
        // TODO: handle case when short_code was not found in links table
      }

      router.replace(linkData.data.rows[0].address);
    })()
  }, [])

  return <div>Link page</div>;
};

export default LinkPage;
