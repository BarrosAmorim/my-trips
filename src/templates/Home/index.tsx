import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import LinkWrapper from '../../components/LinkWrapper'
import { MapProps } from '../../components/Map'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function HomeTemplate ({ places }: MapProps) {
  return (
    <>
    <NextSeo title="My Trips" description="Projeto simples com nextjs" canonical="https://my-trips.barros.com.br"/>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
