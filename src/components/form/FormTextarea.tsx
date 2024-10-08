import { IInput } from '@/src/types';
import { Textarea } from '@nextui-org/input';
import { useFormContext } from 'react-hook-form';

interface IProps extends IInput {
  type?: string;
}

export default function FormTextarea({
  name,
  label,
  variant = 'bordered',
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
}
