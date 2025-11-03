import Link from 'next/link';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}

const PricingCard = ({ plan, price, features }: PricingCardProps) => {
  return (
    <div className="border rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold">{plan}</h3>
      <p className="text-4xl font-bold my-4">{price}</p>
      <ul className="text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/api/checkout" className="bg-primary text-white py-3 px-6 rounded hover:bg-secondary mt-8 inline-block">
        S&apos;abonner
      </Link>
    </div>
  );
};

export default PricingCard;
