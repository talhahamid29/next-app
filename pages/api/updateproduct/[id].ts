import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export default async function handler(req: NextRequest, res:NextResponse) {
  try {
      //  const res = await req.json();
    // // Process the data and add the product
    // ...

    console.log('request object id is' , req.query.id)
    console.log('request object productCategory is' , req.body.productCategoryModal)

    const result =  await prisma.product2.update({
        where : {id : parseInt(req.query.id)},
        data : {
            productCategory : req.body.productCategoryModal,
            productName: req.body.productNameModal,
            serialNumber: req.body.serialNumberModal,
            price:  req.body.priceModal
          }
    })

    res.status(200).json(result);

  } catch (error) {
    console.error('Error during product updation:', error);
    return NextResponse.json({ success: false, error: 'Failed to update product' }, { status: 500 });
  }
}