import { CardWrapper } from "@/components/auth/card-wrapper";
import { BsExclamationTriangleFill } from "react-icons/bs";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationTriangleFill className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
