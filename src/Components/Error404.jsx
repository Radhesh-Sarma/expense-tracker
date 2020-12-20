import React from "react";
import { Card } from "react-bootstrap";
export default function Error404() {
  return (
    <div>
      <Card className="mb-3" style={{ width: "30rem", color: "#000" }}>
        <Card.Body>
          <Card.Title>
            <h1 className="mb- 5 text-center">Error 404</h1>
          </Card.Title>
          <Card.Text>
            <h2 className="text-center">Page Not Found</h2>
            <p>
              <h3 className="text-center">
                We’re sorry but it appears that we can’t find the page you were
                looking for. Usually this occurs because of a page that
                previously existed was removed or you’ve mistyped the address
              </h3>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
