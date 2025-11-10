import { Contact } from "../types";

const db = require("../config/database");

exports.getAllContacts = function (callback: () => void) {
  db.query("SELECT * FROM contacts", callback);
};

exports.getContactById = function (id: number, callback: () => void) {
  db.query("SELECT * FROM contacts WHERE contactId = ?", id, callback);
};

exports.createContact = function (contact: Contact, callback: () => void) {
  db.query("INSERT INTO contacts SET ?", contact, callback);
};

exports.updateContact = function (
  id: number,
  updatedContact: Contact,
  callback: () => void
) {
  db.query(
    "UPDATE contacts SET ? WHERE contactId = ?",
    [updatedContact, id],
    callback
  );
};

exports.deleteContact = function (id: number, callback: () => void) {
  db.query("DELETE FROM contacts WHERE contactId = ?", [id], callback);
};
