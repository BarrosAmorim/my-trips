import LinkWrapper from '../../components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

type ImageProps = {
    url: string
    height: number
    width: number
}

export type PlacesTemplateProps = {
    place: {
        slug: string
        name: string
        description: {
            html: string
        }
        gallery: ImageProps[]
    }
}

export default function PlacesTemplate ({ place }: PlacesTemplateProps) {
  return (
        <>
            <LinkWrapper href="/">
                <CloseOutline size={32} aria-label="Voltar para o mapa" />
            </LinkWrapper>
            <S.Wrapper>
                <S.Container>
                    <S.Heading><h1>{place.name}</h1></S.Heading>
                    <S.Body>
                        <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
                    </S.Body>
                    <S.Gallery>
                        {place.gallery.map((image, index) => (
                            <img key={`photo-${index}`} src={image.url} alt={place.name} />
                        ))}
                    </S.Gallery>
                </S.Container>
            </S.Wrapper>
        </>
  )
}
