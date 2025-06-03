
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 py-3">
      <div className="flex w-full items-center rounded-xl bg-slate-100 h-12">
        <div className="text-slate-500 flex items-center justify-center pl-4">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-slate-900 placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
