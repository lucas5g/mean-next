import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Loader2 size={50} className="animate-spin" />
    </div>
  )
}