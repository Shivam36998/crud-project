import studentModel from "../models/studentSchema.js";

class studentController {

    static createDoc = (req, res) => {
        try {
            const { name, age, fees } = req.body;
            const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            });
            const result = doc.save();
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
    }

    static allDoc = async (req, res) => {
        try {
            const result = await studentModel.find();
            res.render("index", { data: result });
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id);
            res.render('edit', {data: result});
        } catch (error) {
            console.log(error);
        }
    }

    static updateDocById = async (req, res) => {
        try{
            await studentModel.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/student');
        }
        catch(error){
            console.log(error);
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            await studentModel.findByIdAndDelete(req.params.id);
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
    }

}

export { studentController };