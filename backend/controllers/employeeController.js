const Employee = require('../models/employeeModel');
// const Employee = require('../models/employeeModel');

exports.saveEmployee = async (req, res) => {
    const { email } = req.body;

    try {
        const employee = await Employee.findOne({ email: email });
        console.log(employee, 'vidimoaa');
        console.log(!employee, 'vidimoaa2');
        if (!employee) {
            const newEmployee = new Employee({ ...req.body })
            const saveNewEmployee = await newEmployee.save();
            console.log('TRY');
            return res.status(200).json({
                status: 'success',
                message: 'Employee successfuly added',
                user: saveNewEmployee
            });
        } else {
            console.log('EXIST');

            res.status(404).json({
                status: 'fail',
                message: 'User already exist'
            });
        }

    } catch (err) {
        console.log('ERR');
        const message = err.message

        res.status(401).json({
            status: 'fail',
            message: message,
        });
    }
}

exports.getAllEmployee = async (req, res) => {
    try {
        const allEmployee = await Employee.find({})
        console.log(allEmployee, ' svi');
        if (allEmployee.length > 0) {
            res.status(200).json({
                status: 'success',
                message: 'All employee successfuly displayed',
                allEmployee
            });
            // res.send(allEmployee)
        } else {
            res.status(401).json({
                status: 'fail',
                message: 'No employee at all'
            });
        }
    } catch (err) {
        console.log(err, 'ERR');
        res.status(404).json({
            status: 'fail',
            message: 'Something went wrong, please try again'
        });
    }
}

exports.getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        console.log(employee, 'da vidimo');
        console.log('jedan zaposleni');
        if (employee) res.status(200).json({
            status: 'success',
            message: 'Employee successfuly fetched',
            employee
        });
        else res.status(401).json({
            status: 'fail',
            message: 'Something went wrong, please try again.'
        });
    } catch (err) {
        console.log(err, 'greskica');
        res.status(404).json({
            status: 'fail',
            message: 'Employee does not exist',
            err
        })
    }
}

exports.editEmployee = async (req, res) => {
    const editedEmployee = req.body;

    try {
        await Employee.updateOne({ _id: editedEmployee._id }, {
            $set: {
                fullName: editedEmployee.fullName,
                email: editedEmployee.email,
                phoneNumber: editedEmployee.phoneNumber,
                dateOfBirth: editedEmployee.dateOfBirth,
                monthlySalary: editedEmployee.monthlySalary
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'Successfuly updated employee'
        });
    } catch (err) {
        console.log(err, 'greskica');
        res.status(404).json({
            status: 'fail',
            message: 'Something went wrong, please try again.'
        });
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.params.id })
        res.status(200).json({
            status: 'success',
            message: 'Successfuly deleted'
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Employee not found'
        });
    }
}