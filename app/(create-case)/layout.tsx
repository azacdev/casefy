const CreateCaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
      <div className="flex-1 flex flex-col h-full">{children}</div>
    </div>
  );
};

export default CreateCaseLayout;
