import { PageLoading, SkeletonTable, SkeletonButton } from "@/components/ui/loading"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-24 bg-gray-200 rounded p-4">
                <div className="h-8 bg-gray-300 rounded w-8 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>

        {/* IndexNow Section */}
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-48"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-40"></div>
            <div className="h-64 bg-gray-200 rounded w-64 mx-auto"></div>
            <div className="h-10 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="flex space-x-4">
              <div className="h-10 bg-gray-200 rounded w-32"></div>
              <div className="h-10 bg-gray-200 rounded w-40"></div>
            </div>
          </div>

          {/* Table Content */}
          <SkeletonTable rows={5} columns={4} />
        </div>
      </div>
    </div>
  )
}
