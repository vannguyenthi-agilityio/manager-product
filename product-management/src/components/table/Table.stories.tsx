import Storybook from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from './index';

// Utils
import { formatProductResponse } from '@utils/table';

// Mocks
import { productColumns, productData } from '@constants/mocks/table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const formatProductData = formatProductResponse(productData);

const Template: Storybook.StoryFn<typeof Table> = (args) => {
  return (
    <Table
      {...args}
      onActionProduct={action('onActionProduct')}
    />
  );
};

export const ProductTable = Template.bind({});
ProductTable.args = {
  columns: productColumns,
  data: formatProductData,
  filteredItems: ['id']
};
