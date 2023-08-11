type GetDataArgument = {
  url: string;
  data: {
    shortCode: string
  }
}

export const getData = async ({ url, data }: GetDataArgument) => {
  console.log('POST REQUEST', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
    cache: 'no-store'
  });

  if (!res.ok) {
    console.log('Error in POST', { url, data, res });
    throw new Error(res.statusText);
  }

  return res.json();
}

type PostDataArgument = {
  url: string;
  data: {
    link: string
  }
}

export const postData = async ({ url, data }: PostDataArgument) => {
  console.log('POST REQUEST', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
    cache: 'no-store'
  });

  if (!res.ok) {
    console.log('Error in POST', { url, data, res });
    throw new Error(res.statusText);
  }

  return res.json();
}

export const getEnvURL = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    'http://localhost:3000'

  if (!url.includes('http')) {
    url = 'https://' + url;
  }

  return url;
}