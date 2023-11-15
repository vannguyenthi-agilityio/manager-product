// Chakra ui libs
import { Table as TableChakra, TableProps as TablePropsChakra } from '@chakra-ui/react';

// Components
import TableHead from './TableHead';
import TableRow from './TableRow';

// Types
import { Product, ColumnHeader } from '@types';

//Stories
import productStore from '@stores/index';

interface TableProps extends TablePropsChakra {
  columns?: ColumnHeader[];
  data?: Product[];
  filteredItems?: string[];
  size?: 'default';
  variant?: 'default';
  className?: string;
  onActionProduct: (product: Product, action: string) => void;
}

const Table = ({
  columns = [],
  data = [],
  filteredItems = [],
  size = 'default',
  variant = 'default',
  className = '',
  onActionProduct,
  ...props
}: TableProps) => {
  const { filterProduct } = productStore();
  const handleSearchClick = (value: ColumnHeader) => {
    filterProduct(value.value);
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
        onActionProduct={onActionProduct}
      />
    </TableChakra>
  );
};

export default Table;
