import React from 'react'
import Link from 'next/link'
import { ButtonVerde, Title } from 'styles'
import Layout from 'components/Layout'

export default () => (
  <Layout title='Targus App'>
    <Title>Typescript + Styled Components</Title>
    <ButtonVerde>Botão</ButtonVerde>
    <ul>
      <li>
        <Link href='/about-us'>
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href='/list-ssr'>
          <a>List SSR</a>
        </Link>
      </li>
      <li>
        <Link href='/list-csr'>
          <a>List CSR</a>
        </Link>
      </li>
      <li>
        <Link href='/nao-encontrado'>
          <a>404</a>
        </Link>
      </li>
    </ul>
    <p>Port: {process.env.PORT}</p>
    <p>Backend URL: {process.env.BACKEND_URL}</p>
  </Layout>
)
