import validator from 'validator'
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import DoctorModel from '../models/doctor.model.js'

//API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        //checking for all data to add dcotor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Data" })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" })
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter strong password" })
        }

        if (!imageFile) {
            return res.json({ success: false, message: "Please upload image" })
        }

        // hashing doctor password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new DoctorModel(doctorData)
        await newDoctor.save()

        res.json({ success: true, message: "Doctor added successfully" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor }