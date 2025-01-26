



// import express, { response } from "express";
// import cors from "cors";
// import "dotenv/config";
// import "./dateBase.js";
// import { User } from "./models/index.js";


// // appke

// const app = express();
// const port = process.env.PORT || 5003;

// app.use(express.json());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://todo-with-mongo.surge.sh",
//       "https://todo-with-mongo-nine.vercel.app",
//     ],
//   })
// );

// // app.get("/", (req, res) => {
// //   res.send('testing todos');
// // });

// app.get("/api/v1/todos", async (req, res) => {
//  res.send("Hello")
// });

//  app.post("/api/v1/signup", async (req, res) => {
//     // // ye naya todo add krny ke ley he
//    try {
//     const obj = {
//       name: req.body.name,
//       email: req.body.email,
//       password:req.body.password

//      };
     
     

//      const result = await User.create(obj);

//      // todos.push(obj);

//      res.send({ message: "signup succesfully", data: result });
//    } catch (error) {
//      res.status(500).send("Please Add Your Todo");
//    }
//  });

// // ye todo ko upDate ya edit krny ke ley he
// app.patch("/api/v1/todo/:id", async (req, res) => {
//   const id = req.params.id;

//   const result = await Todo.findByIdAndUpdate(
//     id,

//     {
//       todoContent: req.body.todoContent,
//     }
//   );

//   console.log("result=>", result);

//   if (result) {
//     res.status(201).send({
//       data: result,
//       message: "todo updated successfully!",
//     });
//   } else {
//     res.status(200).send({ data: null, message: "todo not found" });
//   }
// });

// // ye todo ko elete krny ke ley he
// app.delete("/api/v1/todo/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   const result = await Todo.findByIdAndDelete(id);
//   if (result) {
//     res.status(201).send({
//       // data: {todoContent: req.body.todoContent, id: id,},
//       message: "todo deleted successfully!",
//     });
//   } else {
//     res.status(200).send({ data: null, message: "todo not found" });
//   }
// });

// app.use("/", (req, res) => {
//   res.status(404).send({ message: "No route found" });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
