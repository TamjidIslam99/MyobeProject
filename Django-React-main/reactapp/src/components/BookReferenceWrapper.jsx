import React, { useState,useEffect} from 'react'
import { BookReferenceForm } from './BookReferenceForm'
import {v4 as uuidv4} from 'uuid'
import { EditBookReferenceForm } from './EditBookReferenceForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import {BookReference} from "./Bookreference";
import axios from 'axios';
uuidv4()

export const BookReferenceWrapper = () => {

    const [bookReferences, setBookReferences] = useState([])
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/book/")
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length > 0) {
              setBookReferences(res.data);
            }
          } else {
            console.error("Failed to fetch data from the server");
          }
        })
        .catch(() => {
          console.error("Something went wrong");
        });
    }, []);

    const addBookReference = (name,author,publisher,year,edition) => {
    
      const requestData = {
        name: name,
        author: author,
        publisher:publisher,
        year:year,
        edition:edition,
        isEditing: false
      };
      
      axios
        .post('http://127.0.0.1:8000/api/book/', requestData)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setBookReferences(prevbooks => [...prevbooks, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    const deleteBookReference = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/book/${id}/`)
          .then(() => {
              const newbooks = bookReferences.filter(t => {
                  return t.id !== id
              });
              setBookReferences(newbooks);
          }).catch(() => {
              alert("Something went wrong");
          })
  }
      const editBookReference = id => {
        setBookReferences(bookReferences.map(bookReference => bookReference.id === id ? {...bookReference, isEditing: !bookReference.isEditing} : bookReference))
      }
      const editDescriptionBookReference = (name,author,publisher,year,edition, id) => {
    const requestData = {
        name: name,
        author: author,
        publisher:publisher,
        year:year,
        edition:edition
      // Include data for the knowledge_level column
      // Add other properties for additional columns here
    };
  
    axios
      .put(`http://127.0.0.1:8000/api/book/${id}/`, requestData)
      .then((response) => {
        // Handle the response if needed
        setBookReferences(prevbooks =>
          prevbooks.map(bookReference =>
            bookReference.id === id
              ? { ...bookReference, name,  author,publisher,year,edition, isEditing: !bookReference.isEditing }
              : bookReference
          )
        );
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const isComplete = () => {
      return bookReferences.length !== 0;
    };
    
  return (
    <div className='Wrapper' id='bookreference'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Reference Books</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <BookReferenceForm addBookReference={addBookReference}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Edition</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookReferences.map((bookReference, index) => (
              
              bookReference.isEditing ? (
                <EditBookReferenceForm editBookReference={editDescriptionBookReference} bookReference={bookReference}/>
              ) : (
                <BookReference bookReference={bookReference} key={bookReference.id} index={index} deleteBookReference={deleteBookReference} editBookReference={editBookReference}/>
                )))
                
            }
          </tbody>
        </table>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/courseassessment'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                  to={isComplete() ? '/' : '#'}
                  onClick={(e) => {
                      if (!isComplete()) {
                          e.preventDefault();
                          alert("Please add at least one Reference Book.");
                      }
                  }}
              >
                  <button
                      type='button'
                      className={`form-btn btn ${isComplete() ? '' : 'disabled'}`}
                  >
                      Next
                  </button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
