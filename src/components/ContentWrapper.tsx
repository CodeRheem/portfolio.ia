export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[83.34%] mx-auto px-6 relative z-10">
      {children}
    </div>
  );
}