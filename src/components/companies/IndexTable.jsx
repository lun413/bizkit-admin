import React from "react";
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  IconButton,
  Table, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
} from "@material-ui/core"

const IndexTable = (props) => (
  <TableContainer className={ props.classes.container}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {
          // rows.slice(props.page * props.rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
          props.list.map((listItem, listItemId) => (
            <TableRow 
              hover 
              tabIndex={-1} 
              key={listItemId}>
                <TableCell>{ listItem.name }</TableCell>
                <TableCell>{ listItemId }</TableCell>
                <TableCell>{ listItemId.region }</TableCell>
                <TableCell>{ listItem.city }</TableCell>
                <TableCell>
                  <IconButton 
                    aria-label="edit row" 
                    size="small"
                    component={Link} 
                    to={"companies/"+ listItem.id + '/edit'}
                  >
                    <EditIcon />     
                  </IconButton>
                  <IconButton 
                    aria-label="delete row" 
                    size="small" 
                    onClick={ () => props.handleDelete( listItem.id ) }
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
)

const columns = [
  {
    id: 0,
    label: "Наименование компании",
    align: "left",
    minWidth: 230
  },
  {
    id: 0,
    label: "Тип юр.лица",
    align: "left",
    minWidth: 100
  },
  {
    id: 0,
    label: "Регион",
    align: "left",
    minWidth: 230
  },
  {
    id: 0,
    label: "Город",
    align: "left",
    minWidth: 200,
  },
  {
    id: 0,
    label: "",
    align: "left",
    minWidth: 100,
  }
]

export default IndexTable;