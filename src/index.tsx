import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
  /**
   * Description for the image when the overlay effect
   * is active
   */
  description: React.ReactNode
} & React.ImgHTMLAttributes<HTMLImageElement>

const ContentContainer = styled.div`
  position: relative;

  &:hover #overlay-content {
    opacity: 1;
  }
`

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.7);

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  height: 100%;
  width: 100%;

  opacity: 0;
  transition: all 0.2s ease-in-out 0s;
`

export const ImageOverlay: React.FC<Props> = ({
  description,
  className,
  ...imageProps
}) => {
  return (
    <ContentContainer>
      <OverlayContainer id='overlay-content'>{description}</OverlayContainer>
      <img className={className} {...imageProps} />
    </ContentContainer>
  )
}
