import Stripe from "stripe";
import { H3Event, defineEventHandler } from "h3";

const config = useRuntimeConfig();
const stripe = new Stripe(config.private.stripeSecretKey, undefined);

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const session_id = body.session_id;

  const returnUrl = config.public.appDomain;

  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer as string,
    return_url: returnUrl,
  });

  await sendRedirect(event, portalSession.url);
});
