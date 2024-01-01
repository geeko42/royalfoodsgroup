'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const initState = {
  name: '',
  email: '',
  message: '',
};

export default function Feedback() {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { name, email, message } = data;

    // Send data to API route
    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await res.json();
    console.log(result);

    // Navigate to thank you
    router.push(`/thank-you/`);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  const content = (
    <form
      action=''
      className='mx-auto mb-10 mt-10 flex w-full max-w-3xl flex-col md:mb-0'
    >
      <label className='mb-1 text-sm' htmlFor='name'>
        Name
      </label>
      <input
        className='mb-6 rounded-2xl bg-gray-100 p-3 text-sm text-black'
        type='text'
        id='name'
        name='name'
        placeholder='Jane'
        pattern='([A-Z])[\w+.]{1,}'
        value={data.name}
        onChange={handleChange}
        // autoFocus
      />

      <label className='mb-1 text-sm' htmlFor='email'>
        Email
      </label>
      <input
        className='mb-6 rounded-2xl bg-gray-100 p-3 text-sm text-black'
        type='text'
        id='email'
        name='email'
        placeholder='Jane@yoursite.com'
        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        value={data.email}
        onChange={handleChange}
      />

      <label className='mb-1 text-sm' htmlFor='message'>
        Message
      </label>
      <textarea
        className='mb-6 rounded-2xl border-slate-950 bg-gray-100 p-3 text-sm text-black'
        id='message'
        name='message'
        placeholder='Your message here...'
        rows={5}
        cols={33}
        value={data.message}
        onChange={handleChange}
      />

      <button
        className='text-fourth-color bg-fifth-color mb-6 w-full rounded-2xl p-2 text-sm uppercase text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-secondary-color  hover:text-primary-color'
        disabled={!canSave}
      >
        Submit
      </button>
    </form>
  );
  return content;
}
