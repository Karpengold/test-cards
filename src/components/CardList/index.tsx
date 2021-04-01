import { Grid } from '@material-ui/core';
import { Status, User } from '../../services/user';
import { Card } from './Card';
import { GridContainer } from './styles';
export interface CardListProps {
  users: User[];
  onChange: (id: number, status: Status) => void;
}

export const CardList = (props: CardListProps) => {
  const { users, onChange } = props;
  return (
    <GridContainer container direction="row" alignItems="center" spacing={6} wrap="wrap">
      {users.map((user: any) => (
        <Grid item md={6} lg={4} key={user.id}>
          <Card id={user.id} name={user.username} status={user.status} onChange={onChange} />
        </Grid>
      ))}
    </GridContainer>
  );
};
