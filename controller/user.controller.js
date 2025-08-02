import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User alredy exist" });
        }

        const hashpassword = await bcryptjs.hash(password, 10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashpassword,
        })
        await createUser.save();
        res.status(201).json({ message: "user create successfully" });
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ message: "internal server error" })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "invalid UserName and Password" })
        } else {
            return res.status(200).json({
                message: "Login Successfully", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    password: user.password
                }
            })
        }
    } catch (error) {
        console.log("error:" + error.message)
        return res.status(500).json({ message: "internal server error" })
    }
}