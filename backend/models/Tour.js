import mongoose from "mongoose";

//* Mongoose kullanarak bir "Tour" veri modeli tanımlandı.

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: String,
      required: true,
    },

    //Tura ait kullanıcı yorumlarını depolar.
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    //Turun öne çıkan bir tur olup olmadığını belirler.
    featured: {
      type: Boolean,
      default: false,
    },
  },

  // MongoDB belgelerine otomatik olarak iki alan ekler:
  //createdAt: Belgenin oluşturulma zamanı ve updatedAt: Belgenin en son güncellenme zamanı
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
