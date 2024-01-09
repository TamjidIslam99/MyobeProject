import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Curriculum() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({starting:"",ending:""})
    let [index]=useState()
    let [bolin,setBolin]=useState(false)
    let {starting,ending}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }


    function addinputdata(){

        if(starting==="" && ending===""){
            alert("Enter Name and Roll no ")
        }
        else{
            setArray([...array,{starting,ending}])
            setInputdata({starting:"",ending:""})
        }
    }



    function deletedata(i){
        console.log(i,"this index row want to be delete")
        let total=[...array]
        total.splice(i,1)
        setArray(total)

    }

    function updateinfo(){
        let total=[...array]
        total.splice(index,1,{starting,ending})
        setArray(total)
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
                        <Link to="/syllabus">
                            <button className='form-btn btn pt-3 pb-3 px-5' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add`:`Update data`}</button>
                        </Link>
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

                    array && array.map(
                        (item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.starting}</td>
                                    <td>{item.ending}</td>
                                    <FontAwesomeIcon icon={faTrash} onClick={()=>deletedata(i)}/>
                                </tr>
                            )
                        }
                    )
                }

                </tbody>
            </table>
            <div className='row'>
                <div className='col-6 text-start'>
                    <Link to='/vision'>
                        <button type='submit' className='btn btn-warning'>Back</button>
                    </Link>

                </div>
                <div className='col-6 text-end'>
                    <Link to='/syllabus'>
                        <button type='submit' className='form-btn btn'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}