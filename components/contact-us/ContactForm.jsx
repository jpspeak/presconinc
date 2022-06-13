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

import ReCAPTCHA from 'react-google-recaptcha'

import { useState } from 'react'

import Swal from 'sweetalert2'

export default function ContactForm() {
  const [isSending, setIsSending] = useBoolean()
  const [isError, setIsError] = useBoolean()
  const [isCaptchaPassed, setIsCaptchPassed] = useBoolean()

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  })

  const clearFormdata = () => {
    setFormdata({
      name: '',
      email: '',
      contactNumber: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormdata(prevState => ({ ...prevState, [name]: value }))
  }

  const handleChangeCaptcha = () => {
    setIsCaptchPassed.on()
  }

  const handleSubmit = async e => {
    if (!isCaptchaPassed) return

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
      clearFormdata()
      setIsSending.off()
      Swal.fire({
        icon: 'success',
        title: 'We have received your message!',
        text: 'We will get back to you as soon as possible.',
        confirmButtonColor: '#0A1D3D'
      })
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
        <Input
          onChange={handleChange}
          id="name"
          name="name"
          value={formdata.name}
          required
          autoFocus
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          value={formdata.email}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="contactNumber">Contact number</FormLabel>
        <Input
          onChange={handleChange}
          id="contactNumber"
          name="contactNumber"
          value={formdata.contactNumber}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <Input
          onChange={handleChange}
          id="subject"
          name="subject"
          value={formdata.subject}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="message">Your message</FormLabel>
        <Textarea
          onChange={handleChange}
          id="message"
          name="message"
          value={formdata.message}
          required
        />
      </FormControl>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
        onChange={handleChangeCaptcha}
      />
      <HStack justifyContent="end">
        <Button
          isLoading={isSending}
          loadingText="Sending your message.."
          disabled={!isCaptchaPassed || isSending}
          type="submit"
          w="full"
          colorScheme="blue"
        >
          Send message
        </Button>
      </HStack>
    </VStack>
  )
}
