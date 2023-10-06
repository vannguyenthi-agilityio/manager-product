import React from 'react'
import {
  Box,
  Avatar,
  HStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getUsers } from 'src/service/user-service'
// Components
import { Text }  from 'src/components/Text'
import BasicTable from 'src/components/Table'
import { Indicator } from 'src/components/Indicator'
import { User } from 'src/models/user'
import { columnsUsers } from 'src/constants/tableColumn'
import { ROUTES } from 'src/constants/routes'

const Users = () => {
  const {
    data = [],
    isFetching
  } = useQuery<Array<User>>(['users'], () => getUsers(1))

  const dataTable = data.length
    ? data.map((user) => ({
        userName: (
          <HStack spacing={2} key={user.id}>
            <Avatar name={user.fullName} src={'https://bit.ly/broken-link'} />
            <Box>
              <Link href={`${ROUTES.USER_DETAIL.URL}${user.id}`}>{user.fullName}</Link>
              <Text pt={2} fontSize='xs'>
                {user.userName}
              </Text>
            </Box>
          </HStack>
        ),
        email: user.email,
        role: user.role,
        plan: user.plan,
        status: user.status,
      }))
    : []

  return isFetching ? (
    <Indicator />
  ) : (
    <Box>
      <Box boxShadow='xs' p='6' rounded='md' bg='white'>
        <BasicTable data={dataTable} columns={columnsUsers} />
      </Box>
    </Box>
  )
}

export default Users

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['user'], () => getUsers(1))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
