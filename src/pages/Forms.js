import {
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween
} from "@cloudscape-design/components";
import { useState } from "react";

let initialFormData = {
  input: ""
};

export default function Forms() {
  const [form, setForm] = useState(initialFormData);

  function handleSubmit(event) {
    console.log("Input event", event.detail);
    // setForm((prev) => {...prev, })
  }

  return (
    <>
      <Container
        header={<Header variant="h1"> This is the forms page </Header>}
      >
        <Form header={<Header variant="h3">Form header </Header>}>
          <FormField label="Text field" description="A regular text field" />
          <SpaceBetween direction="horizontal" size="s">
            <FormField>
              <Input
                placeholder="Placeholder text"
                value={form.input}
                onChange={(event) => handleSubmit(event)}
              />
            </FormField>
          </SpaceBetween>
          <FormField />
        </Form>
      </Container>
    </>
  );
}
