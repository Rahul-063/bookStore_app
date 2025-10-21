import {
    getAllBooks,
    getBookById,
    createBook,
    daleteBook,
    updateBook
} from "../model/book_model.js";

export const getBooks=async(req,res)=>{
    try{
      const books=await getAllBooks();
      res.status(200).json(books)
    }catch(err){
        console.error("Error getting books:", error);
        res.status(500).json({ message: "Server error while fetching books" });
    }
};
export const getBookId=async(req,res)=>{
    try{
       const{id}=req.params;
       const book=await getBookById(id);
       if (!book) {
         return res.status(404).json({ message: "Book not found" });
       }
        res.status(200).json(book);
    }catch(err){
         console.error("Error getting book:", err);
    res.status(500).json({ message: "Server error while fetching book" })
    }
};

export const addbook=async(req,res)=>{
    try{
        const newbook=await createBook(req.body);
         res.status(201).json(newBook);
    }catch (err) {
    console.error("Error creating book:", err);
    res.status(500).json({ message: "Server error while creating book" });
   }
};
export const editBook = async (req, res) => {
    try{
        const updatedbook=await updateBook(id,req.body);
        if(!updatedbook){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json(updatedbook);
    }catch(err){
         console.error("Error updating book:", err);
    res.status(500).json({ message: "Server error while updating book" });
    }
};

export const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    await daleteBook(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ message: "Server error while deleting book" });
  }
};