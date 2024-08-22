import { Document, Model, model, models, Schema } from "mongoose";

export interface Team extends Document {
  _id: string;
  name: string;
  avatar: string;
  role: string;
}

const TeamSchema = new Schema<Team>({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  role: { type: String, required: true },
});

const TeamModel =
  (models.Team as Model<Team>) || model<Team>("Team", TeamSchema);

export default TeamModel;
