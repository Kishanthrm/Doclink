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
router.post("/doctorsignin", async (req, res) => {
  try {
    const {
      // Basic Info
      full_name,
      email,
      phone,
      gender,
      dob,
      address,
      password,

      // Professional Info
      registration_number,
      licensing_authority,
      qualification,
      specialization,
      experience,
      languages,
      bio,

      // New Sections
      services,
      specializations,
      awards,
      education,
      memberships,
      registrations,

      // Documents (if sent via JSON; if via FormData these come from req.files)
    } = req.body;

    const result = await pg.query(
      `INSERT INTO doctor_details 
      (doc_name, doc_email, doc_contact_no, doc_gender,doc_address, doc_reg_no, doc_license, doc_qualification, doc_specialisation, doc_experience, doc_language, doc_bio,doc_specialisation_brief,doc_awards,doc_education,doc_membership,doc_registrations)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING *`,
      [
        full_name,
        email,
        phone,
        gender,
        address,
        registration_number,
        licensing_authority,
        qualification,
        specialization,
        experience,
        languages,
        bio,
        specializations,
        awards,
        education,
        memberships,
        registrations
      ]
    );

    res.status(200).json({ message: "User created"});
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Bad Request", details: err.message });
  }
});
export default router;