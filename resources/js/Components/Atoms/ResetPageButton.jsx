import React from "react";
import { OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";

export default function ResetPageButton({resetPage, isLoading}) {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Reset</Tooltip>}>
            <span onClick={resetPage} className="cursor-pointer mt-1">
                {isLoading ? (
                    <Spinner variant="primary" className="ms-1" />
                ) : (
                    <i className="bi bi-arrow-clockwise text-primary fs-2qx"></i>
                )}
            </span>
        </OverlayTrigger>
    );
}
