import React from 'react';
import Link from 'next/link';
import { getEnvURL } from '@/libs/helpers';
import { getData } from '@/libs/helpers';

interface LinkDetailsPageProps {
  params: {
    shortCode: string;
  }
}

const LinkDetailsPage: React.FC<LinkDetailsPageProps> = async ({ params }) => {
  const { shortCode } = params;

  const shortLink = getEnvURL() + '/' + shortCode;
  const linkData = await getData({
    url: `${getEnvURL()}/api/get-link`,
    data: {
      shortCode: shortCode
    }
  });

  console.log(`linkData:`);
  console.log(linkData.data.rows);

  return (
    <main
      className='
        h-[100vh] 
        flex 
        flex-col 
        gap-4
        justify-center 
        items-center
      '
    >
      <h1 className='text-2xl text-green-400'>
        Your short link:
      </h1>

      <Link
        href={shortLink}
        target='_blank'
        className='text-blue-400'
      >
        {shortLink}
      </Link>

      <p>
        Redirecting to:{" "}
        <Link
          href={linkData?.data?.rows[0]?.address}
          target='_blank'
          className='text-blue-400'
        >
          {linkData?.data?.rows[0]?.address}
        </Link>
      </p>

      <p>
        Your link was accessed {" "}
        {linkData?.data?.rows[0]?.access_count}{" "}
        times.
      </p>
    </main>
  )
}

export default LinkDetailsPage