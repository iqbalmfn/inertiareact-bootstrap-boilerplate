import clsx from "clsx";
import React from "react";

function Table({ children, className }) {
    return (
        <table
            className={clsx(
                className,
                "table table-row-bordered gy-2 gs-5 table-sm fs-7 border rounded"
            )}
        >
            {children}
        </table>
    );
}

function Thead({ children, className }) {
    return <thead className={className}>{children}</thead>;
}

function Tbody({ children, className }) {
    return <tbody className={className}>{children}</tbody>;
}

function TrHead({children, className}) {
    return (
        <tr className={clsx(className, "sticky-table-header fw-bolder fs-6 text-gray-800 bg-gray-200 px-7")}>{children}</tr>
    )
}

function TrBody({children, className}) {
    return (
        <tr className={clsx(className)}>{children}</tr>
    )
}

function Th({ children, className,  valign="align-middle", align="start", width }) {
    return (
        <th className={clsx(className,  `align-${valign}`, `text-${align}`, "text-uppercase")} width={width+'%'}>
            {children}
        </th>
    );
}

function Td({ children, className, valign="align-middle", align="start" }) {
    return (
        <th className={clsx(className, valign, `text-${align}`)}>
            {children}
        </th>
    );
}

Table.Thead = Thead
Table.Tbody = Tbody
Table.TrHead = TrHead
Table.TrBody = TrBody
Table.Th = Th
Table.Td = Td

export default Table;
