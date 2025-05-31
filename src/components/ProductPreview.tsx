import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, BarChart3, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = (
  { icon, title, description }: FeatureProps = {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Lightning Fast",
    description:
      "Our platform processes transactions in milliseconds, not minutes.",
  },
) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

type ProductPreviewProps = {
  id: string;
  // add other props if needed
};

function ProductPreview(props: ProductPreviewProps) {
  const { id, ...rest } = props;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description:
        "Our platform processes transactions in milliseconds, not minutes.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bank-Level Security",
      description:
        "Enterprise-grade encryption and security protocols protect your data.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain insights with our powerful reporting and visualization tools.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      description:
        "Connect with markets worldwide through our extensive network.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50" id="product">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm font-medium"
          >
            Coming Soon
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed to transform how you interact with
            financial markets, making sophisticated investment strategies
            accessible to everyone.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                  alt="Product visualization"
                  className="opacity-80 object-cover w-full h-full"
                />
              </div>
              <div className="relative z-10 bg-black/50 backdrop-blur-sm p-6 rounded-lg text-white max-w-md">
                <h3 className="text-xl font-semibold mb-2">Platform Preview</h3>
                <p>
                  Our intuitive dashboard puts powerful investment tools at your
                  fingertips.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Our Platform?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>
                  Proprietary algorithms that identify market opportunities
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>
                  Seamless integration with existing financial systems
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>
                  Customizable risk profiles to match your investment goals
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Real-time notifications and market insights</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Dedicated support team available 24/7</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground italic mb-4">
            * Website currently in development by Carlo Dominic Suaybaguio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
