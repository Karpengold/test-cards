import { useCallback } from 'react';
import { Status } from '../../services/user';
import { InterractBarContainer, InputContainer, SelectContainer } from './styles';

export interface InterractBarProps {
  handleSubmit: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  searchStatus?: Status;
}

const InterractBar = (props: InterractBarProps) => {
  const { searchStatus, searchValue, handleChange, handleSubmit } = props;
  const handleChangeCall = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(event);
      handleSubmit();
    },
    [handleSubmit, handleChange],
  );
  return (
    <InterractBarContainer>
      <InputContainer name="searchValue" value={searchValue} onChange={handleChangeCall} />

      <SelectContainer name="searchStatus" value={searchStatus} onChange={handleChangeCall} />
    </InterractBarContainer>
  );
};

export { InterractBar };
