import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "doclink",
  password: "Kishanth@007",
  port: "5432",
  ssl: false,
})

export default db;