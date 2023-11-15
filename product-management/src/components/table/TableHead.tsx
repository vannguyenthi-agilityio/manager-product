import { ChangeEvent, useState, useCallback } from 'react';

// Chakra ui libs
import { Flex, Thead, Tr, Th, Input, Box, TableHeadProps as TableHeadPropsChakra } from '@chakra-ui/react';

// Components
import { Select } from '@components/common/Select';

// Types
import { ColumnHeader } from '@types';

// Utils
import { convertStringToCapitalize } from '@utils/index';

// Constants
import { PRODUCT_STATUS, PRODUCT_TYPE } from '@constants';

//Stories
import productStore from '@stores/index';

interface TableHeadProps extends TableHeadPropsChakra {
  columns?: ColumnHeader[];
  onSearchClick: (value: ColumnHeader) => void;
}

const TableHead = ({ columns = [], onSearchClick, ...props }: TableHeadProps) => {
  const status = Object.values(PRODUCT_STATUS).map((status) => ({
    label: convertStringToCapitalize(status === PRODUCT_STATUS.SOLD_OUT ? 'Sold Out' : status),
    value: status
  }));

  const types = Object.values(PRODUCT_TYPE).map((type) => ({
    label: convertStringToCapitalize(type),
    value: type
  }));

  const { valueFilter, filterProduct, productsData, getProducts } = productStore();

  const [searchValue, setSearchValue] = useState('');

  const handleChangeInputSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const keyValue = valueFilter.toLowerCase();
      const searchValue = e.target.value;
      const productsDataFilter = productsData;
      setSearchValue(searchValue);
      if (searchValue !== '') {
        const newProductsData = productsDataFilter.filter((value) =>
          value[keyValue as keyof (typeof productsDataFilter)[0]]
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase())
        );
        filterProduct(valueFilter, newProductsData);
      } else {
        getProducts();
      }
    },
    [valueFilter, searchValue]
  );

  return (
    <Thead
      {...props}
      w='full'
    >
      <Tr>
        {columns.map((column) => (
          <Th
            key={column.value}
            cursor={column.filterable ? 'pointer' : 'default'}
            display={column.value === 'Action' ? 'flex' : 'revert'}
            justifyContent={column.value === 'Action' ? 'center' : 'left'}
          >
            <Flex
              flexDirection='column'
              onClick={() => onSearchClick(column)}
            >
              {column.value === 'Types' ? 'Type' : column.value}
              {column.value === 'Types' || column.value === 'Status' ? (
                <Box w='60px'>
                  <Select
                    options={column.value === 'Types' ? types : status}
                    variant='unstyled'
                    placeholder='All'
                    size='xs'
                    onChange={(e) => handleChangeInputSearch(e)}
                  />
                </Box>
              ) : (
                column.value !== 'Action' && (
                  <Input
                    placeholder='Search'
                    size='xs'
                    onChange={(e) => handleChangeInputSearch(e)}
                    variant='unstyled'
                  />
                )
              )}
            </Flex>
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHead;
