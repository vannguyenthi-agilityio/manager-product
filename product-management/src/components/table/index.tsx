// Chakra ui libs
import { Table as TableChakra, TableProps as TablePropsChakra } from '@chakra-ui/react';

// Components
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

// Types
import { Product, ColumnHeader } from '@types';

interface TableProps extends TablePropsChakra {
  columns?: ColumnHeader[];
  data?: Product[];
  filteredItems?: string[];
  size?: 'default';
  variant?: 'default';
  className?: string;
  onSearchClick: (value: ColumnHeader) => void;
}

const Table = ({
  columns = [],
  data = [],
  filteredItems = [],
  size = 'default',
  variant = 'default',
  className = '',
  onSearchClick,
  ...props
}: TableProps) => {
  const handleSearchClick = (value: ColumnHeader) => {
    onSearchClick(value);
  };

  return (
    <TableChakra
      size={size}
      variant={variant}
      className={className}
      data-testid='product-table'
      {...props}
    >
      <TableHead
        columns={columns}
        onSearchClick={handleSearchClick}
      />
      <TableRow
        data={data}
        filteredItems={filteredItems}
      />
    </TableChakra>
  );
};

export default Table;
