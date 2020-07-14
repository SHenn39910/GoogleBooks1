import React, {useState} from 'react'
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from 'reactstrap'

const BookCard = ({ thumbnail}) => {
    //States
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return <Card style= {{width: '233px'}} className='m-auto'></Card>
  
};

export default BookCard