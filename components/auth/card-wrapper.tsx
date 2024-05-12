"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  socialsLabel?: string
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  socialsLabel
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-[500px] bg-transparent border-none mx-auto">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <BackButton href={backButtonHref} label={backButtonLabel} />
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social socialsLabel={socialsLabel}/>
        </CardFooter>
      )}
    </Card>
  );
};
