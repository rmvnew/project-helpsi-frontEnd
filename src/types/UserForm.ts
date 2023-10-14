import { Profile } from "../interface/profile.interface";
import { User } from "../interface/user.interface";

export type UserFormProps = {
  handleSubmit: (formData: any) => void;
  profiles: Profile[];
  initialValues?: User | null;
  onClose?: () => void;
  user?: User;
};
