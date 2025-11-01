import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="relative flex h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <Spinner className="h-6 w-6 text-primary" />
        <span className="text-sm font-medium tracking-wide">loading...</span>
      </div>
    </div>
  )
}
