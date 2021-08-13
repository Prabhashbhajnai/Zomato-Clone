// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservise routes
import Auth from "./API/Auth";

// Database Connection
import ConnectDB from "./Database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({message: "Setup Successful"}));

zomato.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);