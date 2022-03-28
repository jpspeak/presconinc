import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Flex as="a" alignItems="center">
        <Image
          src="/static/logo.png"
          alt="Prescon inc Logo"
          objectFit="contain"
          height={75}
          width={100}
        />
      </Flex>
    </Link>
  )
}
