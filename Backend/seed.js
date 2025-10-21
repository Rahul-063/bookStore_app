import fs from 'fs';
import db from "./text.js";

const data=JSON.parse(fs.readFileSync("../Frontend/BookStore/src/assets/list.json","utf-8"));

const insertBooks=async()=>{
    try{
        await db.query("DELETE FROM books");
        console.log("🧹 All old books deleted successfully!");

        for(const book of data){
            const { id, name, title, price, category, image } = book;
            await db.query(
            `INSERT INTO books(id, name, title, price, category, image)
                VALUES($1, $2, $3, $4, $5, $6)
                ON CONFLICT(id) DO NOTHING`,
                [id, name, title, price, category, image]
            );
        }
        console.log("✅ All books inserted successfully!");
        process.exit();
    }catch(err){
        console.error("❌ Error inserting books:", err);
        process.exit(1);
    }
}
insertBooks();