import { Database } from './database.types';

export type Source = Database['public']['Tables']['sources']['Row'];
export type Table = Database['public']['Tables']['table']['Row'];
export type Tag = Database['public']['Tables']['tag']['Row'];
export type Table_Tag = Database['public']['Tables']['table_tag']['Row'];
