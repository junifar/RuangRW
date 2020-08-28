import React from "react";
import {
  Segment,
  Container,
  Card,
  Grid,
  Button,
  Divider,
  Header,
  Icon,
  Search,
  Image,
} from "semantic-ui-react";

const Content = () => {
  return (
    <Container>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="address card" />
                Kartu Keluarga
              </Header>

              <Search placeholder="Search countries..." />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="address card outline" />
                Input Baru
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment placeholder>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>Chart Statistic</Grid.Column>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/images/avatar/large/molly.png"
                  />
                  <Card.Header>Molly Thomas</Card.Header>
                  <Card.Meta>New User</Card.Meta>
                  <Card.Description>
                    Molly wants to add you to the group{" "}
                    <strong>musicians</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/images/avatar/large/jenny.jpg"
                  />
                  <Card.Header>Jenny Lawrence</Card.Header>
                  <Card.Meta>New User</Card.Meta>
                  <Card.Description>
                    Jenny requested permission to view your contact details
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Content;
