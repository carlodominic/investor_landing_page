import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

type NewsletterSignupProps = {
  id: string;
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
};

function NewsletterSignup(props: NewsletterSignupProps) {
  const { id, ...rest } = props;

  const {
    title = "Stay Updated on Our Progress",
    description = "Join our newsletter to receive the latest updates about our product development, funding rounds, and launch dates.",
    buttonText = "Subscribe",
    placeholderText = "Enter your email",
  } = rest;

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setFormState("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setFormState("idle");

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would send the email to your backend
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setFormState("success");
      setEmail("");
    } catch (error) {
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 md:py-24 bg-slate-50">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          {title}
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{description}</p>

        <Card className="bg-white shadow-md border-0 max-w-md mx-auto">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={placeholderText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                  disabled={isSubmitting || formState === "success"}
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || formState === "success"}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? "Subscribing..." : buttonText}
                </Button>
              </div>

              {formState === "success" && (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    Thank you for subscribing! We'll keep you updated.
                  </AlertDescription>
                </Alert>
              )}

              {formState === "error" && (
                <Alert className="bg-red-50 text-red-800 border-red-200">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsletterSignup;
