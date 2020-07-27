import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { Paper, TablePagination } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import IndexTable from 'components/companies/IndexTable';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  container: {
    maxHeight: 440,
    // padding
  },
});

const CompaniesIndexPage = (props) => {
  let query = useQuery();
  const classes = useStyles();
  const [page, setPage] = useState(query.getPage || 1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  // useEffect(() => {
    
  // });

  useEffect(() => {
    setLoading(true);
    fetchList().then(() => {setLoading(false);});
  },[page]);

  // function handleSetPage(page){
  //   query.set("page", page);
  //   this.setPage({ page });
  // }

  function deleteHandler(id){
    let url = process.env.REACT_APP_API_URL + "companies/" + id;
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access")
     }
    };
    axios.delete(url, config)
      .then((response)=>{
        if (response.data){
          console.log("deleted", response);
          fetchList();
        }
      }) 
      .catch((err) => {
      // TODO handle request error
        console.log(err);
      });
  }

  async function fetchList(page){
    return await axios.get(process.env.REACT_APP_API_URL + "companies", {
      params: {page}
    }).then((response)=>{
      if (response.data && response.data.results){
        console.log(response.data.results);
        setList(response.data.results);
      } else {
        console.log("error in data:", response.data);
      }
    }).catch((err) => {
      // TODO handle request error
      console.log(err);
    });
  }

  return (
    <Paper className={classes.root}>
      {
        loading 
        ? <h1>Loading</h1> 
        : <>
          <IndexTable 
            classes
            list={ list }
            handleDelete={ deleteHandler }
          />
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            count={0}
            rowsPerPage={10}
            onChangePage={()=>(console.log('clack'))}
            onChangeRowsPerPage={()=>(console.log('click'))}
            // count={rows.length}
            // rowsPerPage={rowsPerPage}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
          />
        </>
      }
    </Paper>
  );
}
 
export default CompaniesIndexPage;