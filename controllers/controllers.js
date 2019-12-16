const Employee = require('../models/database');

const employeeCtrl = {};

employeeCtrl.getEmployees =  async (req, res)=>{
    const employees = await Employee.find();
    res.json(employees); 
};

employeeCtrl.createEmployee = async (req, res)=>{
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.position,
        salary: req.body.salary
    });
    await employee.save();
    res.json({
        estatus: 'Empleado guardado'
    });
};

employeeCtrl.getEmployee = async (req, res)=>{
   const employee = await Employee.findById(req.params.id);
   res.json(employee);
};

employeeCtrl.editEmployee = async (req, res)=>{
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true});
    res.json({
        status: 'Employee Updated'
    });
};

employeeCtrl.deleteEmployee = async (req, res)=>{
    await Employee.findOneAndDelete(req.body.id);
    res.json({
        status: 'Employee Deleted'
    });
};

module.exports = employeeCtrl;