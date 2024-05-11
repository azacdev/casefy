"use client";

import { useAtom } from "jotai";
import { MenuIcon } from "lucide-react";

import { asideAtom } from "@/atoms";
import { Button } from "@/components/ui/button";

type Props = {} & React.ComponentProps<typeof Button>;

export default function OpenSidebarButton(props: Props) {
  const [isOpen, setIsOpen] = useAtom(asideAtom);
  return (
    <Button onClick={() => setIsOpen(!isOpen)} size={'icon'} {...props}>
      <MenuIcon size={24} />
    </Button>
  );
}
