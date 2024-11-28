export interface PricingTier {
  name: string;
  href: string;
  price: string | null;
  mostPopular: boolean;
  description: string;
  features: { icon: string | null; description: string }[];
}
