// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Customizable<key> {
  [key: string]: boolean;
}

export interface ColumnHeader {
  value: string;
  filterable?: Customizable<'isFilter'> | null;
}
