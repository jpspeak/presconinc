import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'

import { BiFilterAlt } from 'react-icons/bi'

import { useFormik } from 'formik'

import { useRouter } from 'next/router'

const types = [
  'Infrastructure Projects',
  'Residential Structures',
  'Commercial Complexes',
  'Hotels & Resorts',
  'IT & Technology Structures',
  'Religious Developments',
  'Institutional Developments',
  'Medical Facilities & Developments',
  'Academic Developments',
  'Industrial Developments'
]

const categories = [
  {
    name: 'Pre-Stressed Concrete Construction',
    subcategories: ['Post-Tensioning', 'Rock and Soil Anchoring']
  },
  { name: 'General Construction', subcategories: ['Flat Slab', 'Lift Slab'] }
]

export default function Filter() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      types: [].concat(router.query.types || []),
      category: router.query.category
    },
    enableReinitialize: true,
    onSubmit: values => {
      router.push(
        {
          pathname: '/projects',
          query: values
        },
        undefined,
        { shallow: true }
      )
    }
  })

  const { handleSubmit, handleChange, setFieldValue, values } = formik

  const handleClickAll = () => {
    setFieldValue('category', '')
  }
  const handleClickClear = () => {
    router.replace(
      {
        pathname: '/projects'
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <Box as="form" onSubmit={handleSubmit} px="4" py="2" border="1px" borderColor="gray.200">
      <HStack alignItems="center">
        <Icon as={BiFilterAlt} />
        <Text fontWeight="bold">Filter</Text>
      </HStack>

      <VStack mt="4" spacing="4">
        <FormControl>
          <FormLabel fontSize="xl">Service Type</FormLabel>

          <VStack alignItems="normal">
            <Button
              onClick={handleClickAll}
              rounded="full"
              w="full"
              colorScheme={!values.category ? 'blackAlpha' : 'gray'}
            >
              All
            </Button>
            {categories.map(category => (
              <Box key={category}>
                <Button
                  onClick={() => setFieldValue('category', category.name)}
                  rounded="full"
                  w="full"
                  colorScheme={values.category === category.name ? 'blackAlpha' : 'gray'}
                >
                  {category.name}
                </Button>
                {values.category === category.name && (
                  <VStack alignItems="normal" pl={6} mt={1} spacing={1}>
                    {category.subcategories.map(subcategory => (
                      <Checkbox
                        key={subcategory}
                        colorScheme="blackAlpha"
                        name="subcategory"
                        onChange={handleChange}
                        value={subcategory}
                        isChecked={values.subcategory?.includes(subcategory)}
                      >
                        {subcategory}
                      </Checkbox>
                    ))}
                  </VStack>
                )}
              </Box>
            ))}
          </VStack>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="xl">Project Type</FormLabel>
          <VStack alignItems="normal">
            {types.map(type => (
              <Checkbox
                key={type}
                colorScheme="blackAlpha"
                name="types"
                onChange={handleChange}
                value={type}
                isChecked={values.types?.includes(type)}
              >
                <Text fontSize="sm">{type}</Text>
              </Checkbox>
            ))}
          </VStack>
        </FormControl>
      </VStack>
      <Button type="submit" w="full" mt="4" colorScheme="brand">
        Apply filter
      </Button>
      <Button onClick={handleClickClear} type="button" w="full" mt="2">
        Clear All
      </Button>
    </Box>
  )
}
