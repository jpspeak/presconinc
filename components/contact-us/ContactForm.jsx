import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  useBoolean,
  VStack
} from '@chakra-ui/react'

import { useState } from 'react'

export default function ContactForm() {
  const [isSending, setIsSending] = useBoolean()
  const [isError, setIsError] = useBoolean()

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormdata(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSending.on()

    try {
      await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      })
      setIsSending.off()
    } catch (error) {
      setIsSending.off()
      setIsError.on()
    }
  }
  return (
    <VStack onSubmit={handleSubmit} as="form" alignItems="normal" p={{ base: 0, lg: 4 }}>
      {isError && (
        <Alert status="error">
          <AlertIcon />
          Somthing went wrong! Please try again.
        </Alert>
      )}
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input onChange={handleChange} id="name" name="name" required autoFocus />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input onChange={handleChange} id="email" name="email" type="email" required />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="contactNumber">Contact number</FormLabel>
        <Input onChange={handleChange} id="contactNumber" name="contactNumber" required />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <Input onChange={handleChange} id="subject" name="subject" required />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="message">Your message</FormLabel>
        <Textarea onChange={handleChange} id="message" name="message" required />
      </FormControl>
      <HStack justifyContent="end">
        <Button isLoading={isSending} type="submit" w="full" colorScheme="blue">
          Send message
        </Button>
      </HStack>
    </VStack>
  )
}
