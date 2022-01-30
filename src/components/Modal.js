import { Button, Alert } from "react-bootstrap";

const title = "I'm a Model";

const aboutText = "Text goes here..."

export function MyModal() {
  const alerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));

  return (
    <>
      <Button>{title}</Button>
      {alerts}
      <p>{aboutText}</p>
    </>
  );
}
