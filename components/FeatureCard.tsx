'use client';

import { Card } from 'primereact/card';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string; // PrimeIcon name
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const header = <i className={`pi ${icon} text-primary text-4xl mb-4`} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card title={title} header={header} className="text-center h-full">
        <p className="m-0">{description}</p>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
