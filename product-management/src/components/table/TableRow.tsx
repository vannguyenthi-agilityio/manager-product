// Chakra ui libs
import {
  Text,
  Flex,
  Tbody,
  Tr,
  Td,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  TableCaption,
  TableBodyProps as TableBodyPropsChakra
} from '@chakra-ui/react';

// Types
import { Product } from '@types';

// Constans
import { PRODUCT_STATUS } from '@constants';

// Utils
import { convertPxToRem, filterItemInArray, convertStringToCapitalize, formatCurrencyUSD } from '@utils/index';

// Constants
import { COLORS } from '@constants';

interface TableRowProps extends TableBodyPropsChakra {
  data: Product[];
  filteredItems?: string[];
  onActionProduct: (product: Product, action: string) => void;
}

const TableRow = ({ data = [], filteredItems = [], onActionProduct, ...props }: TableRowProps) => {
  const handleEditProduct = (product: Product) => {
    //TODO: will handle to open Edit Product modal
    onActionProduct(product, 'edit');
  };

  const handleDeleteProduct = (product: Product) => {
    //TODO: will handle to open Confirm Delete Product modal
    onActionProduct(product, 'delete');
  };

  const renderTableTd = (key: string, value: string) => {
    switch (key) {
      case 'name':
        return (
          <Text
            fontSize='sm'
            fontWeight='normal'
          >
            {convertStringToCapitalize(value)}
          </Text>
        );
      case 'status':
        return (
          <Button
            size='xs'
            colorScheme={convertStringToCapitalize(value) === 'Available' ? 'mania' : 'red'}
          >
            {convertStringToCapitalize(value === PRODUCT_STATUS.SOLD_OUT ? 'Sold Out' : value)}
          </Button>
        );
      case 'quantity':
        return (
          <Text
            fontSize='sm'
            fontWeight='normal'
            style={{ border: '1px solid #dfe2e9', borderRadius: '8px', textAlign: 'center', width: '56px' }}
          >
            {value}
          </Text>
        );
      case 'price':
        return (
          <Text
            fontSize='sm'
            fontWeight='normal'
          >
            {formatCurrencyUSD.format(Number(value))}
          </Text>
        );
      default:
        return (
          <Text
            fontSize='sm'
            fontWeight='normal'
            textAlign={{ sm: 'center', md: 'left' }}
          >
            {convertStringToCapitalize(value)}
          </Text>
        );
    }
  };

  return data.length > 0 ? (
    <Tbody {...props}>
      {data.map((item: Product) => {
        return (
          <Tr key={item.id}>
            {filterItemInArray(Object.keys(item), filteredItems).map((key: string) => {
              const value = item[key as keyof Product] as string;
              return <Td key={`${key}-${item.id}`}>{renderTableTd(key, value)}</Td>;
            })}
            <Td>
              <Flex justifyContent='center'>
                <Menu>
                  <MenuButton>
                    <Flex
                      w={convertPxToRem(50)}
                      height={convertPxToRem(30)}
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text
                        fontSize='xl'
                        bg={`${COLORS.GREY}.650`}
                        borderRadius='full'
                        h={convertPxToRem(4)}
                        w={convertPxToRem(4)}
                        border={`1px solid ${COLORS.GREY}.650`}
                      />
                      <Text
                        fontSize='xl'
                        bg={`${COLORS.GREY}.650`}
                        borderRadius='full'
                        h={convertPxToRem(4)}
                        w={convertPxToRem(4)}
                        mx={convertPxToRem(2)}
                        border={`1px solid ${COLORS.GREY}.650`}
                      />
                      <Text
                        fontSize='xl'
                        bg={`${COLORS.GREY}.650`}
                        borderRadius='full'
                        h={convertPxToRem(4)}
                        w={convertPxToRem(4)}
                        border={`1px solid ${COLORS.GREY}.650`}
                      />
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleEditProduct(item)}>Edit</MenuItem>
                    <MenuItem
                      color='red'
                      onClick={() => handleDeleteProduct(item)}
                    >
                      {' '}
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  ) : (
    <TableCaption>Search not found</TableCaption>
  );
};

export default TableRow;
