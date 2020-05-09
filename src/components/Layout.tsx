import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <div className='layout'>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |
        <Link href='/about-us'>
          <a>About</a>
        </Link>{' '}
        |
        <Link href='/list-csr'>
          <a>List CSR</a>
        </Link>
      </nav>
    </header>

    <section className='dashboard'>{children}</section>

    <footer>{'I`m here to stay'}</footer>
  </div>
)

export default Layout
