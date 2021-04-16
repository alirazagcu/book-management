import React from 'react';
import Nav from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import * as Icon from "react-feather";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'
import DataTable from 'react-data-table-component';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
const customStyles = {
  headRow: {
    style: {
      // border: 'none',
      backgroundColor: "#F5F5F5",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "18px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};
function BookStatus(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/books");
  };

  const connectButtonClick = (data) => {
    console.log(data);
    console.log("clicked");
  };


  const disconnectButtonClick = (data) => {
    console.log("clicked");
  }
  const data = [
  { id: 1, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 2, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 3, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 4, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "sold" },
  { id: 5, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 6, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 7, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 8, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 9, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 10, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 11, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 12, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 13, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 14, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 15, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 16, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 17, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 18, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 19, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 20, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
  { id: 21, book_name: 'Conan the Barbarian', buyer_name: 'Ali', phone_no: '002830498230948', address: "Gazi chock" ,current_status: "available" },
];
  const columns = [
    {
      name: 'Book Name',
      selector: 'book_name',
      sortable: true,
    },
    {
      name: 'Buyer Name',
      selector: 'buyer_name',
      sortable: true,
      // right: true,
    },
    {
        name: 'Phone No',
        selector: 'phone_no',
        sortable: true,
        // right: true,
    },
    {
        name: 'Address',
        selector: 'address',
        sortable: true,
        // right: true,
    },
    {
      name: "Current Status",
      selector: 'current_status',
      sortable: true,
    },
    {
      name : "Actions",
      cell: (row) => (
        <>
        {row.current_status !=="booked" && (
          <>
            <Button
                variant="contained" 
                color="primary"
                startIcon={<AssignmentTurnedInRoundedIcon/>}
                onClick={() => connectButtonClick(row)} 
                size="small"
            >
                    Sold
            </Button>
            <Button
                style={{margin:"1em"}}
                variant="contained" 
                color="secondary"
                onClick={() => connectButtonClick(row)} 
                startIcon={<DeleteIcon/>}
                size="small"
            >
                Delete
            </Button>
         </>
          )}
        {row.current_status =="booked" && (
          <>
            <Button
                variant="contained" 
                color="default"
                onClick={() => connectButtonClick(row)} 
                size="small"
            >
                available
            </Button>
            <Button
                style={{margin:"1em"}}
                variant="contained" 
                color="primary"
                startIcon={<AssignmentTurnedInRoundedIcon/>}
                onClick={() => connectButtonClick(row)} 
                size="small"
            >
                Sold
            </Button>
         </>
          )}
        </>        

      ),
    }
  ];
  return (
    <React.Fragment>
      <Nav />
      <Row>
      <Col sm="12">
          <Card className="mt-10 mx-auto" style={{width:"80%"}}>    
            <CardHeader>
              <CardTitle style={{fontSize:"2em", textAlign:"center", fontSize:"3em"}}>Buyer Books Status</CardTitle>
            </CardHeader>
            <CardBody>
              <DataTable
                data={data}
                columns={columns}
                pagination
                noHeader
                subHeader
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                // fixedHeader
                // fixedHeaderScrollHeight="600px"
                // progressPending={loading}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
}

export default BookStatus;
