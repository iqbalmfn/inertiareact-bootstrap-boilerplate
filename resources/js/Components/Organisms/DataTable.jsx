import clsx from "clsx";
import { Form } from "react-bootstrap";
import { isDesktop, isMobile } from "react-device-detect";

function DataTable({ children, className }) {
    return (
        <div className={`d-flex flex-column my-5 gap-3 ${className}`}>
            {children}
        </div>
    );
}

function Body({ children, className }) {
    return <div className={`table-responsive ${className}`}>{children}</div>;
}

function Footer({ data, params, setParams, onChange }) {
    return (
        <div className="d-flex justify-content-between">
            {isDesktop && (
                <div className="d-flex align-items-center gap-2">
                    Show
                    <Form.Select
                        name="perPage"
                        value={params.perPage}
                        onChange={onChange}
                        size="sm"
                        style={{ width: "75px" }}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </Form.Select>
                    entries from total <strong>{data.total}</strong>
                </div>
            )}

            <div
                className={clsx(
                    isMobile && "justify-content-center",
                    "d-flex align-items-center gap-2"
                )}
            >
                Page {params.page}
                <Form.Select
                    size="sm"
                    name="page"
                    value={params.page}
                    onChange={onChange}
                    style={{ width: "70px" }}
                >
                    {(() => {
                        let option = [];
                        for (let i = 1; i <= data.last_page; i++) {
                            option.push(
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            );
                        }
                        return option;
                    })()}
                </Form.Select>
                from {data.last_page}
                <div className="d-flex gap-2">
                    <button
                        onClick={() =>
                            setParams({
                                ...params,
                                page: data.current_page - 1,
                            })
                        }
                        disabled={data.current_page == 1}
                        className="btn btn-sm btn-outline btn-outline-primary px-3"
                    >
                        <i className="bi bi-chevron-left ms-1"></i>
                    </button>
                    <button
                        onClick={() =>
                            setParams({
                                ...params,
                                page: data.current_page + 1,
                            })
                        }
                        disabled={data.current_page == data.last_page}
                        className="btn btn-sm btn-outline btn-outline-primary px-3"
                    >
                        <i className="bi bi-chevron-right ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

DataTable.Body = Body;
DataTable.Footer = Footer;

export default DataTable;
