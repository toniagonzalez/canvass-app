import { createContext } from "react";
import { Contact } from "./types";

export const ContactsContext = createContext<Contact[] | []>([]);
