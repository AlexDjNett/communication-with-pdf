import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default function Dashboard() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = getUser()
  console.log('🚀 ~ file: page.tsx:5 ~ Dashboard ~ getUser:', getUser())

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')
  return <div>page</div>
}
