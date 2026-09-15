import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../../lib/supabase-server";
import { sendDigitalProductEmail } from "../../../../lib/email";

export async function POST(request) {
  const supabaseAdmin = getSupabaseAdmin();
  try {
    const body = await request.json();

    const customer = body.customer;
    const product = body.product;
    const purchaseOption = body.purchaseOption;
    const paymentResponse = body.paymentResponse;
    const deliveryLink = body.deliveryLink || "";

    if (!customer?.email || !customer?.fullName || !product?.name || !purchaseOption?.price) {
      return NextResponse.json({ error: "Missing required order details." }, { status: 400 });
    }

    const normalizedEmail = customer.email.trim().toLowerCase();

    const userQuery = await supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", normalizedEmail)
      .limit(1)
      .maybeSingle();

    if (userQuery.error) {
      const missingUsersError = /could not find table 'public\.users'/i.test(userQuery.error.message);
      return NextResponse.json(
        {
          error: userQuery.error.message,
          help: missingUsersError
            ? "Supabase tables are missing. Run supabase-schema.sql in your Supabase SQL editor to create users and orders."
            : undefined,
        },
        { status: 500 }
      );
    }

    let userId = userQuery.data?.id;

    if (!userId) {
      const insertUser = await supabaseAdmin.from("users").insert({
        full_name: customer.fullName,
        email: normalizedEmail,
        phone: customer.phone || null,
        address: customer.address || null,
      }).select("id").single();

      if (insertUser.error) {
        return NextResponse.json({ error: insertUser.error.message }, { status: 500 });
      }

      userId = insertUser.data.id;
    }

    const orderCode = `MXR-${Date.now()}`;
    const orderPayload = {
      order_code: orderCode,
      customer_id: userId,
      customer_name: customer.fullName,
      customer_email: normalizedEmail,
      customer_phone: customer.phone || null,
      customer_address: customer.address || null,
      product_id: product.id || null,
      product_name: product.name,
      product_slug: product.slug || null,
      product_format: purchaseOption.label || "Standard",
      product_price: purchaseOption.price,
      payment_id: paymentResponse?.razorpay_payment_id || paymentResponse?.paymentId || null,
      payment_status: paymentResponse?.status || "Paid",
      delivery_type: purchaseOption.deliveryType || "physical",
      digital_link: purchaseOption.deliveryType === "digital" ? deliveryLink : null,
      notes: `Created through checkout API at ${new Date().toISOString()}`,
    };

    const orderInsert = await supabaseAdmin.from("orders").insert([orderPayload]);

    if (orderInsert.error) {
      const missingOrdersError = /could not find table 'public\.orders'/i.test(orderInsert.error.message);
      return NextResponse.json(
        {
          error: orderInsert.error.message,
          help: missingOrdersError
            ? "Supabase tables are missing. Run supabase-schema.sql in your Supabase SQL editor to create users and orders."
            : undefined,
        },
        { status: 500 }
      );
    }

    if (purchaseOption.deliveryType === "digital" && deliveryLink) {
      await sendDigitalProductEmail({
        to: normalizedEmail,
        customerName: customer.fullName,
        productName: product.name,
        deliveryLink,
      });
    }

    return NextResponse.json({ ok: true, order: orderPayload });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to complete checkout." }, { status: 500 });
  }
}
