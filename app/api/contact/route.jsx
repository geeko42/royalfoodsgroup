import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// export default function handler(NextApiRequest, NextApiResponse) {
//   NextApiResponse.status(200).json({ message: 'Hello from Next.js!' });
// }

export async function GET(NextApiRequest, NextApiResponse) {
  // const name = searchParams.get('name')
  // const email = searchParams.get('email')

  const { searchParams } = new URL(NextApiRequest.url);
  const obj = Object.fromEntries(searchParams.entries());
  return NextResponse.json(obj);
}
