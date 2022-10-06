import { Container, Header, ColumnLayout } from "@cloudscape-design/components";

export default function NotFound() {
  return (
    <Container header={<Header variant={"h1"}>Not implemented </Header>}>
      <ColumnLayout>
        <p>This demo has not yet been implemented</p>
      </ColumnLayout>
    </Container>
  );
}
