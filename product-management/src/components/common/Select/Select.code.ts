export const asDefault = `
import Select from '@components/Select';

// Default

<Select
  label="Select"
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
/>
`;

export const withoutLabel = `
import Select from '@components/Select';

// Without label

<Select
  onChange={() => {}}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
  size="md"
  variant="outline"
/>`;

export const large = `
import Select from '@components/Select';

// Large size

<Select
  label="Large"
  onChange={() => {}}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
  size="lg"
  variant="outline"
/>`;

export const medium = `
import Select from '@components/Select';

// Large size

<Select
  label="Medium"
  onChange={() => {}}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
  size="md"
  variant="outline"
/>`;

export const small = `
import Select from '@components/Select';

// Small size

<Select
  label="Small"
  onChange={() => {}}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
  size="sm"
  variant="outline"
/>`;

export const disabled = `
import Select from '@components/Select';

// Disabled

<Select
  isDisabled
  label="Disable"
  onChange={() => {}}
  options={[
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ]}
  size="md"
  variant="outline"
/>`;
