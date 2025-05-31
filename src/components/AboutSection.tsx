import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

type AboutSectionProps = {
  id: string;
  title?: string;
  vision?: string;
  teamMembers?: TeamMember[];
};

function AboutSection(props: AboutSectionProps) {
  const { id, ...rest } = props;

  const {
    title = "Meet Our Team",
    vision = "Our vision is to revolutionize the investment landscape by creating accessible, transparent financial tools that empower individuals to build wealth with confidence. We believe that financial freedom should be attainable for everyone, not just the privileged few.",
    teamMembers = [
      {
        name: "Alex Johnson",
        role: "Founder & CEO",
        bio: "Former investment banker with 10+ years experience at Goldman Sachs. MBA from Harvard Business School.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      {
        name: "Sarah Chen",
        role: "CTO",
        bio: "Ex-Google engineer with expertise in AI and machine learning. PhD in Computer Science from Stanford.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      {
        name: "Michael Rodriguez",
        role: "Head of Product",
        bio: "Previously led product teams at Stripe and Square. Passionate about creating intuitive financial products.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      },
    ],
  } = rest;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{vision}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
