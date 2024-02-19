import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export default async function handler(req: NextRequest, res:NextResponse) {
  try {
      //  const res = await req.json();
    // // Process the data and add the product
    // ...

    console.log('request object is' , req.query.id)

    const result =  await prisma.product2.delete({
        where : {id : parseInt(req.query.id)}
    })

    res.status(200).json(result);

  } catch (error) {
    console.error('Error during product addition:', error);
    return NextResponse.json({ success: false, error: 'Failed to add product' }, { status: 500 });
  }
}