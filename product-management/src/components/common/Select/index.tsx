// Components
import { Select as ChakraSelect, Text } from '@chakra-ui/react';

// Types
import type { SelectProps } from '@chakra-ui/react';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect extends SelectProps {
  /**
   * List of options
   */
  options: IOption[];

  /**
   * Label for select component
   * @default Select
   */
  label?: string;

  /**
   * Selected value
   */
  value?: string;
}

export const Select = ({ options, label, value, ...rest }: ISelect) => {
  return (
    <label>
      {label && (
        <Text
          mb={2}
          fontSize='sm'
        >
          {label}
        </Text>
      )}
      <ChakraSelect
        value={value}
        onChange={rest.onChange}
        {...rest}
        data-testid='select'
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </label>
  );
};

export default Select;
