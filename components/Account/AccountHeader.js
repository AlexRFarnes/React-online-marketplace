import { Header, Icon, Segment, Label } from "semantic-ui-react";
import formateDate from "../../utils/formatDate";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment secondary inverted color='violet'>
      <Label
        ribbon
        color='teal'
        size='large'
        icon='privacy'
        tyle={{ textTransfomr: "capitqalize" }}
        content={role}
      />
      <Header inverted textAlign='center' as='h1' icon>
        <Icon name='user' />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>{formateDate(createdAt)}</Header.Subheader>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
