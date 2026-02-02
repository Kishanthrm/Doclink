import express from "express";
import axios from "axios";
import { Router } from "express";
import { Pool } from "pg";
import bcrypt from "bcrypt";
import db from "../../config/db.js";

const pg = new Pool(db);

const app = express();
app.use(express.json());

const router = Router();

router.get('/doctorspecifications', async (req,res) => {
  
})