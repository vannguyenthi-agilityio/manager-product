import { KeyboardEvent, FocusEvent, ChangeEvent } from 'react';

import {
  FormErrorMessage,
  FormLabel,
  Box,
  FormControl,
  Input as InputChakra,
  InputProps as InputPropsChakra
} from '@chakra-ui/react';

interface FormInputProps extends InputPropsChakra {
  id?: string;
  value?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  defaultValue?: string;
  error?: string;
  autocomplete?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  variant?: 'default';
  size?: 'default' | 'md' | 'lg';
  backgroundColor?: 'default.light' | string;
  color?: 'default.grey.200' | string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
}

export const FormInput = ({
  value,
  label,
  placeholder,
  isDisabled = false,
  isRequired = true,
  type = 'text',
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  handleReset,
  className = '',
  size = 'default',
  variant = 'default',
  backgroundColor = 'default.light',
  color = '',
  error = '',
  readOnly = false,
  autoFocus = false,
  ...props
}: FormInputProps) => (
  <Box py={3}>
    <FormControl variant="floating" isRequired={isRequired} isInvalid={!!error}>
      <InputChakra
        value={value}
        label={label}
        placeholder={placeholder}
        isDisabled={isDisabled}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={className}
        size={size}
        variant={variant}
        backgroundColor={backgroundColor}
        color={color}
        readOnly={readOnly}
        autoFocus={autoFocus}
        {...props}
      />
      <FormLabel>{label}</FormLabel>
      {error && (
        <FormErrorMessage mt={1} fontSize="sm">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  </Box>
);
