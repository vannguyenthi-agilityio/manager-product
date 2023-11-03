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

interface TableHeadProps extends TableHeadPropsChakra {
  columns?: ColumnHeader[];
  onSearchClick: (value: ColumnHeader) => void;
}

export const TableHead = ({ columns = [], onSearchClick, ...props }: TableHeadProps) => {
  const status = Object.values(PRODUCT_STATUS).map((status) => ({
    label: convertStringToCapitalize(status === PRODUCT_STATUS.SOLD_OUT ? 'Sold Out' : status),
    value: status
  }));

  const types = Object.values(PRODUCT_TYPE).map((type) => ({
    label: convertStringToCapitalize(type),
    value: type
  }));
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
              {column.value}
              {column.value === 'Type' || column.value === 'Status' ? (
                <Box w='60px'>
                  <Select
                    options={column.value === 'Type' ? types : status}
                    variant='unstyled'
                    placeholder='All'
                    size='xs'
                  />
                </Box>
              ) : (
                column.value !== 'Action' && (
                  <Input
                    placeholder='Search'
                    size='xs'
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
