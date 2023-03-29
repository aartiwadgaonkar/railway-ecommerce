const { registerEmployee, getAllEmployees, getSingleEmployees, updateEmployees, deleteEmployees, destroyEmployees, getEmployeeProfile, adminGetAllProducts } = require("../controllers/employeeController")
const { adminProtected } = require("../middleware/auth")
const router = require("express").Router()

router
    .get("/", getAllEmployees)
    .get("/profile", adminProtected, getEmployeeProfile)
    .get("/admin-products", adminProtected, adminGetAllProducts)
    .get("/detail/:employeeId", getSingleEmployees)
    .post("/register", registerEmployee)
    .put("/update/:employeeId", updateEmployees)
    .delete("/delete/:employeeId", deleteEmployees)
    .delete("/destroy", destroyEmployees)
module.exports = router