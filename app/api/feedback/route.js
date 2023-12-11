import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(NextApiRequest) {
  const data = await NextApiRequest.json();
  console.log('data: ', data);

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
}
