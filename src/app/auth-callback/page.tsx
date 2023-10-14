import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'

export default function Page() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        // user in db
        router.push(origin ? `/${origin}` : '/dashboard')
      }
    },
  })

  return <div>page</div>
}
