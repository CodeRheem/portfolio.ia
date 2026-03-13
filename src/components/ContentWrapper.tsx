export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[130rem] mx-auto p-3 relative z-10">
      {children}
    </div>
  );
}  