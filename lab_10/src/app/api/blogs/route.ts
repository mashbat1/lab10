import { NextResponse } from "next/server";
import { createConnection } from "mysql2/promise";
export const GET = async(req:Request, res:Response)=>{
    try{
        const connection = await createConnection({
            host: "localhost",
            user: "root",
            password: "Sanane11.",
            database: "lab9",
          });
      
          // Query the database to get posts
          const [rows] = await connection.query("SELECT * FROM students");
      
          // Close the connection
          await connection.end();
      
          return  NextResponse.json({ message: "OK", posts: rows }, { status: 200 });
    }catch(err){
        return NextResponse.json({message:"Error",err}.err,{
            status:500
        });
    }
    
};