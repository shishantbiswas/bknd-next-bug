import dynamic from 'next/dynamic'

export const Admin = dynamic(() => import('bknd/ui').then((mod) => mod.Admin), {
  ssr: false,
})
