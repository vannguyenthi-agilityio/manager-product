// Chakra ui libs
import { Table as TableChakra, TableProps as TablePropsChakra } from '@chakra-ui/react';

// Components
import TableHead from './TableHead';
import TableRow from './TableRow';

// Types
import { Product, ColumnHeader } from '@types';
interface TableProps extends TablePropsChakra {
  columns?: ColumnHeader[];
  data?: Product[];
  filteredItems?: string[];
  size?: 'default';
  variant?: 'default';
  className?: string;
  onActionProduct: (product: Product, action: string) => void;
  onShowDetail: (id: string) => void;
  onSearchClick: (value: ColumnHeader) => void;
}

const Table = ({
  columns = [],
  data = [],
  filteredItems = [],
  size = 'default',
  variant = 'default',
  className = '',
  onActionProduct,
  onShowDetail,
  onSearchClick,
  ...props
}: TableProps) => {
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
        onSearchClick={onSearchClick}
      />
      <TableRow
        data={data}
        filteredItems={filteredItems}
        onActionProduct={onActionProduct}
        onShowDetail={onShowDetail}
      />
    </TableChakra>
  );
};

export default Table;
