import React from "react";
import { Segment, Container, Card, Grid } from "semantic-ui-react";

const Content = () => {
  return (
    <Container>
      <Segment>
        <Grid columns={4}>
          <Grid.Column>1</Grid.Column>
          <Grid.Column>2</Grid.Column>
          <Grid.Column>3</Grid.Column>
          <Grid.Column>4</Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Content;
