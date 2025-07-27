

export default function LoadingSkelton() {
  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow animate-pulse space-y-4"
        >
          <div className="bg-gray-300 h-40 w-full rounded" />
          <div className="bg-gray-300 h-4 w-3/4 rounded" />
          <div className="bg-gray-300 h-4 w-1/2 rounded" />
        </div>
      ))}
    </div>
  </>
}
