import express from "express";
var router = express.Router();

const subtitle = "Feel free to contact me if you'ld like us to collaborate 😁";
const FormData = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Full name",
    value: "",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    value: "",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message here...",
    value: "",
  },
  {
    name: "",
    label: "",
    type: "submit",
    placeholder: "",
    value: "Send",
  },
];

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("contact", {
    title: "Contact me",
    page: "contact",
    data: FormData,
    subtitle: subtitle,
    isform: false,
  });
});

export default router;
