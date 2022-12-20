import { request, response } from "express";

const upload_create = async (req = request, res = response) => {
    try {
        const data = await req.body;
        return res.status(201).json({
            success: true,
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error,
        });
    }
};

export default upload_create;
