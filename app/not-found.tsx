export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-center h-full">
      <h1 className="text-3xl mb-4">404</h1>
      <p className="mb-6">page not found</p>
      <a href="/" className="text-amber-800 hover:underline">
        return home
      </a>
    </div>
  )
}

