import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const amount = Number(body.amount) || 0;

    if (!amount) {
      return NextResponse.json({ error: "A valid order amount is required." }, { status: 400 });
    }

    const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "";
    const secretKey = process.env.RAZORPAY_KEY_SECRET;

    if (!publicKey || !secretKey) {
      return NextResponse.json({
        error: "Razorpay credentials are not configured. Please set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your environment.",
      }, { status: 500 });
    }

    const authToken = Buffer.from(`${publicKey}:${secretKey}`).toString("base64");
    const orderResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: `maxera_${Date.now()}`,
        notes: {
          product_name: body.productName || "MaxEra Product",
          customer_email: body.customer?.email || "",
        },
      }),
      cache: "no-store",
    });

    if (!orderResponse.ok) {
      const errorPayload = await orderResponse.text();
      return NextResponse.json({ error: errorPayload || "Failed to create Razorpay order." }, { status: orderResponse.status });
    }

    const order = await orderResponse.json();

    return NextResponse.json({
      mode: "live",
      keyId: publicKey,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unexpected Razorpay route failure." }, { status: 500 });
  }
}
