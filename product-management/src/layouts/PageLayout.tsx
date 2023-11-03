// Libraries
import { ReactNode } from 'react';

// Components
import { Box, Container } from '@chakra-ui/react';

// Utils
import { convertPxToRem } from '@utils/index';

const PageLayout = ({ children, h = 'full' }: { children: ReactNode; h?: string }) => {
  return (
    <>
      <Box
        h={h}
        minH={{ base: '0', md: `calc(100vh)` }}
      >
        <Container
          mb={convertPxToRem(48)}
          px={{ base: convertPxToRem(10), sm: convertPxToRem(30), md: convertPxToRem(110), lg: convertPxToRem(149) }}
          py={{ base: convertPxToRem(10), sm: convertPxToRem(30), md: convertPxToRem(50), lg: convertPxToRem(72) }}
          maxW='full'
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default PageLayout;
