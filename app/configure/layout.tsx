import { ReactNode } from "react";

import MaxWidthWrapper from "@/components/max-width-wrapper";

const ConfigureLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col w-full">
      {children}
    </MaxWidthWrapper>
  );
};

export default ConfigureLayout;
