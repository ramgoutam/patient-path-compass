import { Button } from "@/components/ui/button";
interface PageHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}
export function PageHeader({
  title,
  description,
  action
}: PageHeaderProps) {
  return <div className="flex items-center justify-between p-6 py-[26px]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      {action && <Button onClick={action.onClick} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
          {action.label}
        </Button>}
    </div>;
}