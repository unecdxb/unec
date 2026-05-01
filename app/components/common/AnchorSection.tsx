export default function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "var(--header-offset)" }}
    >
      {children}
    </section>
  );
}
