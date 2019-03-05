module.exports = mongoose => {
  const Schema = new mongoose.Schema(
    {
      active: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'user',
        enum: ['hospital', 'clinic', 'polyClinic', 'communityClinic'],
      },
      name: String,
      partOf: {
        ref: 'Organization',
        type: mongoose.Schema.Types.ObjectId,
      },
      manageBy: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
      },
    },
    {
      timestamps: true,
    },
  );

  Schema.set('toObject', { virtuals: true });

  return mongoose.model('Organization', Schema);
};
