
interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <h1 className="text-slate-900 text-3xl font-bold leading-tight">{title}</h1>
        <p className="text-slate-600 text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}
