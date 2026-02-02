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

// router.get('/home', async (req, res) => {
//   try{
//     const newsData = await axios.get("https://newsdata.io/api/1/latest?apikey=pub_bc2beff7e900460095cf0e7b96302c23&q=Medical&country=in");
//     res.send(newsData.data.results);
//     // console.log(newsData.data.results);

//   }
//   catch(err){
//     console.log(err.message);
//   }
// })
router.post("/signup", async (req, res) => {
  try {
    const {
      user_name,
      user_age,
      user_gender,
      user_contact_no,
      user_email,
      user_password,
      user_blood_group,
      user_height,
      user_weight,
      user_medical_conditions,
      user_medication,
      user_allergies,
      user_med_history,
    } = req.body;

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const result = await pg.query(
      `INSERT INTO user_details 
      (user_name, user_age, user_gender, user_contact_no, user_email, user_password, user_blood_group, user_height, user_weight, user_medical_conditions, user_medication, user_allergies, user_med_history)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [
        user_name,
        user_age,
        user_gender,
        user_contact_no,
        user_email,
        hashedPassword,
        user_blood_group,
        user_height,
        user_weight,
        user_medical_conditions,
        user_medication,
        user_allergies,
        user_med_history,
      ]
    );

    res.status(200).json({ message: "User created", user: result.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Bad Request", details: err.message });
  }
});

router.get("/bookappointments", async (req, res) => {
  try {
    const result = await pg.query(
      "SELECT doc_id, doc_name, doc_specialisation, doc_experience, doc_qualification, doc_language, doc_profile_img FROM doctor_details"
    );

    const doctors = result.rows.map((doc) => {
      return {
        ...doc,
        doc_profile_img: doc.doc_profile_img
          ? doc.doc_profile_img.toString("base64")
          : null,
      };
    });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if email exists
    const result = await pg.query(
      "SELECT user_password FROM user_details WHERE user_email = $1",
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.user_password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 3. Success
    return res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
