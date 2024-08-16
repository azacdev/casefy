"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    // <Modal
    //   title="Are you sure?"
    //   description="This action cannot be undone"
    //   isOpen={isOpen}
    //   onClose={onClose}
    // >
    //   <div className="pt-6 space-x-2 flex items-center justify-end w-full">
    //     <Button disabled={loading} variant={"outline"} onClick={onClose}>
    //       Cancel
    //     </Button>

    //     <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
    //       Continue
    //     </Button>
    //   </div>
    // </Modal>
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone</DialogDescription>
        </DialogHeader>
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} variant={"outline"} onClick={onClose}>
            Cancel
          </Button>

          <Button
            disabled={loading}
            variant={"destructive"}
            onClick={onConfirm}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
