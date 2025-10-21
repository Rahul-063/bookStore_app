import db from "../text.js";

export const getAllBooks=async()=>{
    const result=await db.query("SELECT * FROM books ORDER BY id ASC");
    return result.rows
};
export const getBookById=async(id)=>{
    const result=await db.query("SELECT * FROM books WHERE id=$1",[id]);
    return result.rows[0];
};
export const createBook=async(book)=>{
    const {name,price,category,image,title}=book;
    const result=await db.query("INSERT INTO books (name,price,category,image,title) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [name,price,category,image,title]
    );
    return result.rows[0];
};
export const daleteBook=async(id)=>{
    await db.query("DELETE FROM books WHERE id=$1",[id]);
};
export const updateBook=async (id,book)=>{
  const { name, price, category, image, title } = book;
  const result=await db.query(
    "UPDATE books SET name=$1, price=$2, category=$3, image=$4, title=$5 WHERE id=$6 RETURNING *",[name, price, category, image, title, id]
  );
  return result.rows[0];
}