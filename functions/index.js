import functions from "firebase-functions";
import express from "express"
import cors from "cors"
import { getDogs, testApi } from "./src/dogs.js";


const app = express() //sets up express app

app.use(express.json()) //tells app to accept posts with JSON bodies
app.use(cors()) //tells app to allow cross-origin resource sharing

//Routes
app.get("/dogs", getDogs)
app.get("/test",testApi)
// app.post("add-dog", addDog)

//Instead of app.listen to a port, create cloud function and point to "app" (express app)
export const api = functions.https.onRequest(app)