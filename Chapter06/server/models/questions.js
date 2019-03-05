module.exports = mongoose => {
  const Schema = new mongoose.Schema(
    {
      text: String,
      active: {
        type: Boolean,
        default: false,
      },
      createdBy: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
      },
      options: [
        {
          score: Number,
          option: String,
        },
      ],
    },
    {
      timestamps: true,
    },
  );

  Schema.set('toObject', { virtuals: true });

  return mongoose.model('Question', Schema);
};
