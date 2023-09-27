import { Profile } from "../types/Profile";
import { User } from "../types/User";

export interface UserFormProps {
  handleSubmit: (formData: any) => void;
  profiles: Profile[];
  initialValues?: User | null;
  onClose?: () => void;
  user?: User;
}
