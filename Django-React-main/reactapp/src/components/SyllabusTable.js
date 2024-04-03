import React, {Fragment} from 'react';
import {Container, Row, Table} from "react-bootstrap";

function SyllabusTable({yearValue,semesterValue,year,program,selectedOption}) {
    return (
        <Fragment>
            <Container fluid="true" className="p-5">
                <Row>
                    <Table className='table table-bordered text-center align-middle table-hover border-dark'>
                        <thead>
                        <tr>
                            <th>Program</th>
                            <th>System</th>
                            <th>Starting Session</th>
                            <th>Year</th>
                            <th>Semester</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>B.SC</td>
                            <td>Semester</td>
                            <td>2019-2020</td>
                            <td>3rd</td>
                            <td>2nd</td>
                        </tr>
                        <tr>
                            <td>B.SC</td>
                            <td>Semester</td>
                            <td>2020-2021</td>
                            <td>2nd</td>
                            <td>2nd</td>
                        </tr>
                        <tr>
                            <td>M.SC</td>
                            <td>Semester</td>
                            <td>2019-2020</td>
                            <td>1st</td>
                            <td>2nd</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    );
}

export default SyllabusTable;