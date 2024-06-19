import express from "express"
import { Clients } from "../models/Clients.js";
import { Projects } from "../models/Projects.js";



const router = express.Router()




router.post("/clientdetails", async (req, res) => {
    try {
        const { clientname, clientadrs1, clientadrs2, clientphone } = req.body;
        await Clients.create({
            clientname,
            clientadrs1,
            clientadrs2,
            clientphone
        })
        res.status(200).json({
            success: true,
            message: "Client has been added, submit project"
        })

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})


router.get("/getclient/:name", async (req, res) => {
    try {
        const client = await Clients.findOne({ clientname: req.params.name })
        res.status(200).json({
            success: true,
            message: client
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
        console.log(error)
    }
})



router.post("/clientproject/:name", async (req, res) => {
    try {
        const { project, qty, price } = req.body;
        await Projects.create({
            userId: req.params.name,
            project,
            qty,
            price
        })
        res.status(200).json({
            success: true,
            message: "Projects has been submitted"
        })

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})



router.get("/getproject/:name", async (req, res) => {
    try {
        const project = await Projects.findOne({ userId: req.params.name })
        res.status(200).json({
            success: true,
            message: project
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})



export default router