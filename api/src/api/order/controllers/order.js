("use strict");

const stripe = require("stripe")("sk_test_51OJBbySDRnCEx4FkNQHFUA9xPPtknQzbqjHwXDBM8KXtohSFmEl7MwX7vwIURZwwH9y6vl6L64oyryiSCh3ZAyM7002FRA2pnd");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const productId = 26; // Replace with the correct product ID logic later
          const item = await strapi
            .service("api::product.product")
            .findOne(productId);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "http://localhost:3000?success=true",
        cancel_url: "http://localhost:3000?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));