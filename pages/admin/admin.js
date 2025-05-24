// pages/admin/admin.js
import Head from 'next/head'
import dynamic from 'next/dynamic'

//  ⬇️  Importujemy AdminComments dynamicznie z wyłączonym SSR,
//      aby uniknąć przypadkowych problemów z kodem działającym wyłącznie w przeglądarce
const AdminComments = dynamic(
  () => import('../../components/AdminComments'),
  { ssr: false }
)

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Panel administracyjny</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="container">
        <h1 className="text-center my-4">Panel administracyjny</h1>

        {/* Sekcja komentarzy  */}
        <AdminComments collection="devSiteGeneral" />
      </main>
    </>
  )
}
