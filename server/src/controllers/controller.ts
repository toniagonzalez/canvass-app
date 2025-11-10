import { Request, Response } from "express";

import { Contact } from "../types";

const ContactModel = require("../models/contacts");

// Contacts
exports.getAllContacts = function (req: Request, res: Response) {
  ContactModel.getAllContacts((err: Error, contacts: Contact[]) => {
    if (err) throw err;
    res.json({ contacts, status: 200 });
  });
};

exports.getContactById = function (req: Request, res: Response) {
  ContactModel.getContactById(req.params.id, (err: Error, contact: Contact) => {
    if (err) throw err;
    res.json({ contact: contact, status: 200 });
  });
};

exports.createContact = function (req: Request, res: Response) {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    notes: req.body.notes,
  };

  ContactModel.createContact(newContact, (err: Error) => {
    if (err) throw err;
    res.json({ message: "New contact created successfully", status: 201 });
  });
};

exports.updateContact = function (req: Request, res: Response) {
  const updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    notes: req.body.notes,
  };

  ContactModel.updateContact(req.params.id, updatedContact, (err: Error) => {
    if (err) throw err;
    res.json({ message: "Contact updated successfully", status: 200 });
  });
};

exports.deleteContact = function (req: Request, res: Response) {
  ContactModel.deleteContact(req.params.id, (err: Error) => {
    if (err) throw err;
    res.json({ message: "Contact deleted successfully", status: 200 });
  });
};
