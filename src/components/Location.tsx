import Button from "@/components/Button";
import Row from "@/components/Row";
import { ADDRESS, MAP } from "@/lib/content";

export default function Location() {
  return (
    <Row n="01" label="Visit">
      <address className="not-italic text-base leading-snug sm:text-lg">
        {ADDRESS}
      </address>
      <div className="mt-4">
        <Button href={MAP}>Get Directions →</Button>
      </div>
    </Row>
  );
}
