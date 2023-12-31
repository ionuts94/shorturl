"use client";
import React, { useState } from 'react';
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { postData } from '@/libs/helpers';
import { getEnvURL } from '@/libs/helpers';
import { APIResponse } from '@/app/api/generate-link/route';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface InitialFormState {
  traffic: string;
  link: string
}

export const GenerateLinkForm = () => {
  const router = useRouter();

  const [formState, setFormState] = useState<InitialFormState>({
    traffic: 'https://',
    link: ''
  });

  function handleInputChange(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  function handleHttpInLink() {
    let newFormState = {
      ...formState
    }

    if (formState.link.includes('https://')) {
      newFormState = {
        traffic: 'https://',
        link: formState.link.slice(8, formState.link.length)
      }
    } else if (formState.link.includes('http://')) {
      newFormState = {
        traffic: 'http://',
        link: formState.link.slice(7, formState.link.length)
      }
    }

    return newFormState;
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = getEnvURL();
    const newFormState = handleHttpInLink();
    const res: APIResponse = await postData({
      url: `${url}/api/generate-link`,
      data: {
        link: `${newFormState.traffic}${newFormState.link}`
      }
    });

    if (!res.ok) {
      toast.error(res.error);
    }

    router.push(`/link-details/${res.shortCode}`);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="
        mx-auto 
        mt-10 
        w-full
        gap-x-4
        md:w-[400px]
      "
    >
      <div className="flex gap-2 w-full">
        <Select
          className="
            w-[35%] 
            md:w-[30%]"
          name='traffic'
          onChange={handleInputChange}
          defaultValue={formState.traffic}
          required
        >
          <option value='https://'>https://</option>
          <option value='http://'>http://</option>
        </Select>

        <Input
          className="w-[70%]"
          name='link'
          onChange={handleInputChange}
          placeholder='Enter your link'
          value={formState.link}
        />
      </div>

      <Button
        type='submit'
        className='w-full mt-4'
      >
        Generate short link
      </Button>
    </form>
  )
}