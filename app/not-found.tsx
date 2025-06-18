import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="mb-5">Page Not Found</h2>
      <Link
        href="/"
        className="flex items-center gap-2 transition-all hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Trang chủ
      </Link>
    </div>
  )
}

export default NotFoundPage
