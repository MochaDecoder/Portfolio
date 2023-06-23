export default function SectionHeader({ title, href }: { title: string, href: string }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <a className="text-indigo-600 font-bold" href={href}>View all</a>
    </div>
  );
}