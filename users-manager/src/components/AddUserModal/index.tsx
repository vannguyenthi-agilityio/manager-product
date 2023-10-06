import React from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Components
import { FormInput } from '../FormInput';
import { Text } from '../Text';
import { Modal } from '../Modal';
import { Filter } from '../Filter';

interface AddUserModalProps {
  value?: string;
  error?: string;
  isOpen?: boolean;
  isCentered?: boolean;
  isDisabledSubmit?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement, Element>,
    value: string
  ) => void;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const filterRows = [
  {
    id: 1,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  },
  {
    id: 2,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  },
  {
    id: 3,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  }
];

const columnsFilter = {
  filterValue: 'Editor',
  setFilter: (val) => val,
  preFilteredRows: filterRows,
  header: 'Role',
  id: 'role',
  type: 'text',
  placeholder: 'Filter by role',
  size: 'md'
};

const AddUserModal = ({
  value,
  error,
  isOpen = false,
  isCentered = true,
  isDisabledSubmit,
  isLoading,
  onClose,
  onChange,
  onBlur,
  onSubmit
}: AddUserModalProps) => (
  <Modal
    title="Add User"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={onSubmit}
    description=""
    submitButtonText="Submit"
    cancelButtonText="Cancel"
    isDisabledSubmit={isDisabledSubmit}
    isLoading={isLoading}
    isCentered={isCentered}
  >
    <Box my="40px">
      <Text
        size="extraSmall"
        variant="label"
        letterSpacing="wide"
        w="100%"
        value="Email"
      />
      <FormInput
        placeholder="FullName"
        label="FullName"
        type="text"
        size="default"
        value={value}
        error={error}
        onChange={(e) => onChange(e, 'fullname')}
        onBlur={(event) => onBlur(event, 'fullname')}
      />
      <FormInput
        placeholder="UserName"
        label="UserName"
        type="text"
        size="default"
        value={value}
        error={error}
        onChange={(e) => onChange(e, 'username')}
        onBlur={(event) => onBlur(event, 'username')}
      />
      <FormInput
        placeholder="Jonhdoe@email.com"
        label="Email"
        type="email"
        size="default"
        value={value}
        error={error}
        onChange={(e) => onChange(e, 'email')}
        onBlur={(event) => onBlur(event, 'email')}
      />
      <FormInput
        placeholder="Company"
        label="Company"
        type="text"
        size="default"
        value={value}
        error={error}
        onChange={(e) => onChange(e, 'company')}
        onBlur={(event) => onBlur(event, 'company')}
      />
      <FormInput
        placeholder="Country"
        label="Country"
        type="text"
        size="default"
        value={value}
        error={error}
        onChange={(e) => onChange(e, 'country')}
        onBlur={(event) => onBlur(event, 'country')}
      />
      <Filter column={columnsFilter} />
    </Box>
  </Modal>
);

export default AddUserModal;
