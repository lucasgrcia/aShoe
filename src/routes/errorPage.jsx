import { useRouteError } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ErrorPAge() {
    const errorMsg = useRouteError();
    console.error(errorMsg)

    return (
        <div id='errorPage' className="container">
            <h1>Fuck!</h1>
            <p>
                <i>{ errorMsg.statusText || errorMsg.message }</i>
            </p>
            <Button variant="primary">Primary</Button>{' '}
        </div>
    )
}