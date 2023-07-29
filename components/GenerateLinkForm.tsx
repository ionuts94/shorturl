"use client";
import React, { useState } from 'react';
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { postData } from '@/libs/helpers';

interface InitialFormState {
  traffic: string;
  link: string
}

export const GenerateLinkForm = () => {
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

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`submiting form`);
    console.log(formState);

    const res = await postData({
      url: 'http://localhost:3000/api/generate-link',
      data: {
        link: `${formState.traffic}${formState.link}`
      }
    })
  }

  return (
    <form
      className="mx-auto mt-10 flex max-w-xl gap-x-4"
      onSubmit={handleFormSubmit}
    >
      <Select
        name='traffic'
        onChange={handleInputChange}
        defaultValue={formState.traffic}
        required
      >
        <option value='https://'>https://</option>
        <option value='http://'>http://</option>
      </Select>

      <Input
        name='link'
        onChange={handleInputChange}
        placeholder='Enter your link'
        value={formState.link}
      />

      <Button
        type='submit'
      >
        Generate short link
      </Button>
    </form>
  )
}