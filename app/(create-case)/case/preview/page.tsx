import { notFound } from "next/navigation";

import db from "@/lib/db";
import DesignPreview from "./_components/design-preview";
interface PreviewPagepProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const PreviewPage = async ({ searchParams }: PreviewPagepProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default PreviewPage;
