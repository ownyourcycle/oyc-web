import { ImageType } from '~/types/ImageType'
import { urlForImage } from '../lib/image'

export const getImage = (image: any): ImageType => {
  if (!image) {
    return {
      url: null,
      alt: '',
    }
  }

  return {
    url: urlForImage(image),
    alt: image?.alt || '',
  }
}
