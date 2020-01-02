import mongoose, { Document, Schema } from 'mongoose';

export interface IStore extends Document {
  storeId: string;
  address: string;
  location: string;
  coordinates: number[];
  formattedAddress: string;
  createdAt: Date;
}

const storeSchema: Schema = new Schema({
  storeId: {
    type: String,
    required: [true, 'Please add a store ID'],
    unique: true,
    trim: true,
    maxlength: [10, 'Store ID must be less than 10 chars'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IStore>('Store', storeSchema);
