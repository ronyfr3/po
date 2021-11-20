export const COLUMNS = [
  {
    Header: "image",
    accessor: "image",
    disableFilters: true, //to disable filter input for this column
    disableSortBy: true, //to disable sort for this column
    Cell: (tableProps) => (
      <img
        src={tableProps.row.original.image}
        alt=""
        width="40px"
        height="30px"
      />
    ),
  },
  {
    Header: "product name",
    accessor: "product_name",
  },
  {
    Header: "category",
    accessor: "category",
  },
  {
    Header: "price",
    accessor: "price",
  },
  {
    Header: "customer",
    accessor: "customer",
  },
  {
    Header: "status",
    accessor: "status",
  },
];
