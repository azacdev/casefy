import { ReactNode } from "react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Steps from "@/components/steps";

const ConfigureLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col w-full">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default ConfigureLayout;
