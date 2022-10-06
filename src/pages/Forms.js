import {
  Container,
  Form,
  FormField,
  Header,
  Input,
  RadioGroup,
  Select,
  SpaceBetween
} from "@cloudscape-design/components";
import { useState } from "react";

let initialFormData = {
  input: "",
  radio: "false",
  dropdown: null
};

export default function Forms() {
  const [form, setForm] = useState(initialFormData);

  function handleSubmit(event, label) {
    console.log("Handle submit ran for an event", label, event.detail.value || event.detail.selectedOption, form)

    setForm((prev) => {
      if(label === "dropdown") return { ...prev, [label]: event.detail.selectedOption }
      return { ...prev, [label]: event.detail.value }
    })
  }

  return (
    <>
      <Container
        header={<Header variant="h1"> This is the forms page </Header>}
      >
        <Form header={<Header variant="h3">Form header </Header>}>
          <SpaceBetween direction="vertical" size="s">
            <FormField label="Text field" description="A regular text field">
              <Input
                placeholder="Placeholder text"
                value={form.input}
                onChange={(event) => handleSubmit(event, "input")}
              />
            </FormField>
            <FormField>
              <p>Note: limited styling, cant get these items on the same line</p>
              <RadioGroup
                items={[
                  {
                    value: "R1",
                    description: "Radio 1 description",
                    label: "Radio 1"
                  },
                  {
                    value: "R2",
                    description: "Radio 2 description",
                    label: "Radio 2"
                  }
                ]}
                value = {form.radio}
                onChange={event => handleSubmit(event, "radio")}
              />
            </FormField>
            <FormField>
                <Select
                  options={[1,2,3].map(num => {
                    return {
                      label: `Select ${num}`,
                      value: {num},
                      description: `Select ${num}`,
                    }
                  })}
                  onChange = {(event) => handleSubmit(event, "dropdown")}
                  value = {form.dropdown}
                />
            </FormField>
          </SpaceBetween>
        </Form>
      </Container>
    </>
  );
}
