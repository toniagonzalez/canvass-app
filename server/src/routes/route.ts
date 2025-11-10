const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// Contact Routes
router.get("/contacts/", controller.getAllContacts);
router.get("/contact/:id", controller.getContactById);
router.post("/contact/", controller.createContact);
router.put("/contact/:id", controller.updateContact);
router.delete("/contact/:id", controller.deleteContact);

export default router;
