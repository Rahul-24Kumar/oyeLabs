const customerModel = require('../model/customer');

const customer_Create = async function (req, res) {
    try {
        let data = req.body
        let email = req.body.email_Id

        let emaiLExist = await customerModel.findOne({ email });

        if (emaiLExist) {
            res.status(400).send({ msg: "This email already exist, please provide different Id" });
        }

        if (data) {
            let savedData = await customerModel.create(data);
            res.status(201).send({ msg: savedData, status: true });

        } else {
            return res.status(400).send({ msg: "invalid data" });
        }
    } catch (error) {
        return res.status(500).send({ msg: "Please insert data", status: false });
    }

}

// -------------------------------------------------------------------------------------------------

const customer_Login = async function (req, res) {
    let userPhoneNumber = req.body.phone_Number;
    let password = req.body.password;

    let customer = await authorModel.findOne({ phone_Number: userPhoneNumber, password: password });
    
    if (!customer)
        return res.send({
            status: false,
            msg: "Details are not correct",
        });

    let token = jwt.sign(
        {
            customerId: customer._id.toString(),
            batch: "thorium",
            organisation: "FunctionUp",
        },
        "oyeLabs"
    );

    res.setHeader("x-api-key", token);
    res.send({ status: true, data: token });
};


// -------------------------------------------------------------------------

const customer_Update = async function (req, res) {
    try {
        let updateUser = req.params.email_Id
        let body = req.body;

        let id = await blogsModel.findById(updateUser)

        if (!id) {
            return res.status(404).send({ msg: "can't update details" })
        }

        let updatedUser = await blogsModel.findOneAndUpdate({ id: updateUser }, { name: body.name }, { new: true, upsert: true });
        res.status(200).send({ status: true, data: updatedUser })

    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

module.exports = {
    customer_Create,
    customer_Login,
    customer_Update
};