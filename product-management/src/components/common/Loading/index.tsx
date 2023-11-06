import { Flex, Spinner } from '@chakra-ui/react';

export interface ILoading {
  isCenter?: boolean;
  isFull?: boolean;
  size?: string;
}

const Loading = ({ size = 'md', isCenter = true, isFull = false }: ILoading) => {
  return (
    <Flex
      position={isCenter ? 'fixed' : 'relative'}
      top={0}
      bottom={0}
      left={0}
      right={0}
      h={isFull ? '100vh' : 'auto'}
      w={isFull ? '100vw' : 'auto'}
      alignItems='center'
      justifyContent='center'
    >
      <Spinner size={size} />
    </Flex>
  );
};

export default Loading;
