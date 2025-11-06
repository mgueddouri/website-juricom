'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}

const PricingCard = ({ plan, price, features }: PricingCardProps) => {
  const title = (
    <div className="text-center">
      <h3 className="text-2xl font-bold font-heading">{plan}</h3>
      <p className="text-4xl font-bold my-4">{price}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card title={title} className="text-center h-full flex flex-col">
        <div className="flex-grow">
          <ul className="text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <i className="pi pi-check-circle text-success mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/api/checkout">
            <Button label="Choisir ce plan" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
