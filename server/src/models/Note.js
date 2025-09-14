import mongoose from 'mongoose'

// create schema end a model of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, UpdatedAt from mongo/mongooseAPI
)

const Note = mongoose.model('Note', noteSchema)

export default Note
