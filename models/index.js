import { Schema, model } from "mongoose";


const todoSchema = new Schema(
  {
    todoContent: { type: String, required: true },
ip:{type: String}
  },
  { timestamps: true },
);

const userSchema = new Schema(
  {

    name:{type : String , required : true},
    email:{type : String , required : true , unique: true},
    password:{type : String , required : true}

  },
  {timestamps: true},
)

// commentSchema.plugin(mongooseAggregatePaginate);

export const User = model ("User", userSchema);