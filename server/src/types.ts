import { RowDataPacket } from "mysql2";

export interface Contact extends RowDataPacket {
  id: number;
  firstName: string;
  lastName: string;
  notes?: string;
}
