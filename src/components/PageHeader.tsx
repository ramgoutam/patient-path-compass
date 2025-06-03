
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <h1 className="text-slate-900 text-3xl font-bold leading-tight">{title}</h1>
        {description && (
          <p className="text-slate-600 text-sm font-normal leading-normal">{description}</p>
        )}
      </div>
      {action && (
        <Button
          onClick={action.onClick}
          className="bg-slate-200 text-slate-900 hover:bg-slate-300 rounded-full px-4 h-8"
          variant="secondary"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
