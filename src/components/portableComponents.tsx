import Image from 'next/image'
import { urlForImage } from '~/sanity/lib/image'

export const portableComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      const url = urlForImage(value)
      return (
        <figure className="relative h-96 w-full">
          <Image src={url} fill alt={value.alt} className="object-cover object-center" />
        </figure>
      )
    },
  },
}
