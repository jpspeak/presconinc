import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

function ContactInfoItem({ title, trunkline, email, fbPage }) {
  return (
    <Box>
      <Heading
        as="h4"
        textAlign={{ base: 'center', lg: 'left' }}
        textDecoration="underline"
        size="sm"
        mb={2}
      >
        {title}
      </Heading>
      <Text color="blackAlpha.700">
        <Box as="strong">Trunkline: </Box> {trunkline}
      </Text>
      <Text color="blackAlpha.700">
        <Box as="strong">Email: </Box> {email}
      </Text>
      {fbPage && (
        <Text color="blackAlpha.700">
          <Box as="strong">FB Page: </Box> {fbPage}
        </Text>
      )}
    </Box>
  )
}

ContactInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  trunkline: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fbPage: PropTypes.string
}

const contactInfoItems = [
  {
    title: 'For Our Services',
    trunkline: '(+632) 8531 4971 loc 820',
    email: 'sales.post@presconinc.com',
    fbPage: 'facebook.com/presconphil'
  },
  {
    title: 'For Properties',
    trunkline: '(+632) 8531 4971 loc 828 or 829',
    email: 'leasing@presconinc.com'
  },
  {
    title: 'For Career Opportunities',
    trunkline: '(+632) 8531 4971 loc 801',
    email: 'hr@presconinc.com'
  }
]

export default function ContactInfo() {
  return (
    <Box>
      <Heading fontSize={{ base: '2xl', lg: '4xl' }} textAlign={{ base: 'center', lg: 'left' }}>
        We are more than happy to hear from you!
      </Heading>
      <VStack alignItems={{ base: 'center', lg: 'normal' }} mt={8} spacing={8} lineHeight={1.8}>
        {contactInfoItems.map(({ title, trunkline, email, fbPage }) => (
          <ContactInfoItem
            key={title}
            title={title}
            trunkline={trunkline}
            email={email}
            fbPage={fbPage}
          />
        ))}
      </VStack>
    </Box>
  )
}
