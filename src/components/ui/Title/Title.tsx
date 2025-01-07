const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h6 className={`md:text-[44px] text-[28px] font-bold ${className}`}>
      {text}
    </h6>
  );
};

export default Title;
