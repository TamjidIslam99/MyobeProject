import React, { useState, useEffect , useContext} from 'react'
import Form from 'react-bootstrap/Form';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import DataContext from './Context/DataContext';
import axios from 'axios';

export default function Curriculum() {
    const {upCurriculums,setUpCurriculums} = useContext(DataContext)
    const [curriculums,setCurriculums]=useState([])
    const [inputdata,setInputdata]=useState({starting:"",ending:""})
    const [index]=useState()
    const [bolin,setBolin]=useState(false)
    const {starting,ending}=inputdata;


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/curriculum/")
          .then((res) => {
            if (res.status === 200) {
              if (res.data.length > 0) {
                setCurriculums(res.data);
              }
            } else {
              console.error("Failed to fetch data from the server");
            }
          })
          .catch(() => {
            console.error("Something went wrong");
          });
      }, []);

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }


    function addinputdata(){

        if(starting==="" && ending===""){
            alert("Select Starting and ending sessions")
        }
        else{
            // setUpCurriculums('('+starting+') - ('+ending+')')
            const requestData = {starting : starting,ending : ending};
        
            axios
                .post('http://127.0.0.1:8000/api/curriculum/', requestData)
                .then((response) => {
                // Handle the response if needed
                console.log(response.data);
                setCurriculums(prevCurriculums => [...prevCurriculums, response.data]);
                })
                .catch((err) => {
                console.log(err);
                });
            setInputdata({starting:"",ending:""})
        }
    }



    function deletedata(id){
        axios.delete(`http://127.0.0.1:8000/api/curriculum/${id}/`)
              .then(() => {
                  const newCurriculum = curriculums.filter(t => {
                      return t.id !== id
                  });
                  setCurriculums(newCurriculum);
              }).catch(() => {
                  alert("Something went wrong");
              })

    }

    function updateinfo(){
        let total=[...curriculums]
        total.splice(index,1,{starting,ending})
        setCurriculums(total)
        setBolin(false)
        setInputdata({starting:"",ending:""})
    }
    return (
        <div className='container Wrapper'>
            <div className='row'>
                <div className='col-4 Heading1'>

                </div>
                <div className='col-4 Heading2'>
                    <h2 >Curriculum</h2>
                </div>
                <div className='col-4 Heading3'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className='ObeForm'>
                <div className='row'>
                    <div className='col-5 Drop'>
                        <label for="dropdown" className='input-label'>Starting Session:</label>
                        <Form.Select id="dropdown"  value={inputdata.starting || ""} name="starting" autoComplete='off' placeholder='Enter Name' onChange={data}>
                            <option>Open this select menu</option>
                            <option value="2018-2019">2018-2019</option>
                            <option value="2019-2020">2019-2020</option>
                            <option value="2020-2021">2020-2021</option>
                            <option value="2021-2022">2021-2022</option>
                        </Form.Select>
                    </div>
                    <div className='col-5'>
                        <label for="dropdown" className='input-label'>Ending Session:</label>
                        <Form.Select id="dropdown" value={inputdata.ending || ""} name="ending" autoComplete='off' placeholder='Enter Name' onChange={data}>
                            <option>Open this select menu</option>
                            <option value="2018-2019">2018-2019</option>
                            <option value="2019-2020">2019-2020</option>
                            <option value="2020-2021">2020-2021</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023">2022-2023</option>
                            <option value="2023-2024">2023-2024</option>
                            <option value="2024-2025">2024-2025</option>
                        </Form.Select>
                    </div>
                    <div className='col-2'>
                            <button className='form-btn btn pt-3 pb-3 px-5' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add`:`Update data`}</button>
                    </div>
                </div>
            </div>




            <table className='table table-bordered text-center table-hover bg-dark' >
                <thead>
                <tr>
                    <th>Starting Session</th>
                    <th>Ending Session</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>

                {

                    curriculums && curriculums.map(
                        (item,i)=>{
                            return(
                                <tr key={i} className='nav-item'>
                                    <td>
                                        <Link to='/syllabus' className='nav-link' onClick={() => setUpCurriculums(item)}>
                                            <span>{item.starting}</span>
                                        </Link>
                                        
                                    </td>
                                    <td>
                                        <Link to='/syllabus' className='nav-link' onClick={() => setUpCurriculums(item)}>
                                            <span>{item.ending}</span>
                                        </Link>
                                    </td>
                                    <td><FontAwesomeIcon icon={faTrash} onClick={()=>deletedata(item.id)}/></td>
                                    
                                </tr>
                            )
                        }
                    )
                }

                </tbody>
            </table>
            <div className='row'>
                <Link Link to='/vision'>
                    <button type='submit' className='btn btn-warning'>Back</button>
                </Link>
            </div>
        </div>
    )
}