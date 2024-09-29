import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function SocialIcon({image, link}: {image: string, link: string}) {
  return (
    <div>
        <Link href={link} className={"mx-3"}>
          <Image
            src={image}
            width={40}
            height={40}
            alt={link}
          />
        </Link>
    </div>
  )
}