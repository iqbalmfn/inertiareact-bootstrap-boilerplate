import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function ManajemenUserHeader({
    filter,
    setQ,
    isLoading,
}) {
    return (
        <div>
            <Form onSubmit={filter} className="d-flex align-items-center gap-2">
                <FormControl
                    type="text"
                    name="q"
                    placeholder="Cari Nama/Username..."
                    onChange={(e) => setQ(e.target.value)}
                />
                <Button
                    type="submit"
                    size="sm"
                    className="py-3 w-125px"
                    disabled={isLoading}
                >
                    <i className="bi bi-search"></i> Cari
                </Button>
            </Form>
        </div>
    );
}
