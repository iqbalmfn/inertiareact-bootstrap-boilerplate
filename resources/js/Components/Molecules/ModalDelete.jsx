import React from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

export default function ModalDelete({
    showModal,
    handleCloseModal,
    loading,
    onDelete,
}) {
    return (
        <Modal show={showModal} onHide={handleCloseModal} size="sm" centered>
            <Modal.Body>
                <div className="d-flex flex-column align-items-center">
                    <span
                        className="bi bi-exclamation-circle text-danger"
                        style={{ fontSize: "50px" }}
                    ></span>
                    <span>Apakah kamu akan menghapus data ini?</span>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleCloseModal}>
                    <i className="bi bi-x-lg me-1"></i> Batal
                </Button>
                <Button variant="danger" onClick={onDelete} disabled={loading}>
                    {loading ? (
                        <Spinner
                            animation="border"
                            variant="light"
                            size="sm"
                            className="me-2"
                        />
                    ) : (
                        <i className="bi bi-trash me-1"></i>
                    )}
                    Hapus
                </Button>
            </Modal.Footer>
        </Modal>
    );
}