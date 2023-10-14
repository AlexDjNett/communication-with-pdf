import UploadButton from './UploadButton'

export default function Dashboard() {
  return (
    <main className="mx-auto max-2-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl">My files</h1>

        <UploadButton />
      </div>
      {/* display all user files*/}
    </main>
  )
}