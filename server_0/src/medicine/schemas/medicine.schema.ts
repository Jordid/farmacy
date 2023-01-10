import { Schema } from 'mongoose';

export const MedicineSchema = new Schema({
  expirationDate: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  posology: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
    },
  ],
});
