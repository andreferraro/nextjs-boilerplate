import React from 'react'
import Link from 'next/link'
import { ButtonVerde, Title } from 'styles'

export default () => (
  <div>
    <Title>Typescript + Styled Components</Title>
    <ButtonVerde>Botão</ButtonVerde>
    <ul>
      <li>
        <Link href='/about-us'>
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href='/nao-encontrado'>
          <a>404</a>
        </Link>
      </li>
    </ul>
  </div>
)
