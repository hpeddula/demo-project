import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { DataTable, Column } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import './StudyDashboard.css'
import { studyDetails, visits, users } from '../store';

export default function StudyDashboard() {
    const [showExtraStudyDetails, toggleStudyDetails] = useState(false)
    const [visitSectionToggle, toggleVisitorSection] = useState(false)
    const [usersToggle, toggleUsers] = useState(false)
    const [visitors, handleVisitorChange] = useState(visits)
    const [localUsers, handleUserChange] = useState(users)

    const editorForRowEditing = (props, field) => {
        return <input type="text" placeholder={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
    }

    const onEditorValueChangeForRowEditing = (props, value) => {
        let updatedValues = [...props.value];
        let newValue = value;
        console.log(updatedValues, newValue)
    }

    const onRowEditInit = (event) => {
    }
    const visitMarkup = !visitSectionToggle ?
        <div className="visit-box">
            <i className="pi pi-chevron-down" style={{ cursor: 'pointer' }} onClick={() => toggleVisitorSection(!visitSectionToggle)}><span style={{ padding: '5px' }} >  Visits </span></i>
        </div> :
        <>
            <div className="visit">
                <i className="pi pi-chevron-up" style={{ cursor: 'pointer' }} onClick={() => toggleVisitorSection(!visitSectionToggle)}><span style={{ padding: '5px' }} >  Visits </span></i>
                <i className="pi pi-plus-circle" style={{ fontSize: 'xx-large', position: 'absolute', right: '5em' }}></i>
            </div>
            <DataTable value={visitors} paginator={true} rows={5} editMode="row" className="visitors"
                onRowEditInit={onRowEditInit} >
                <Column field="epoch" header="EPOCH" />
                <Column field="visitName" header="Visit name" editor={(props) => editorForRowEditing(props, 'visitName')} />
                <Column field="visitNumber" header="Visit number" />
                <Column field="week" header="Week" />
                <Column field="day" header="Day" />
                <Column rowEditor={true} style={{ 'width': '70px', 'textAlign': 'center' }}></Column>
            </DataTable>
        </>

    const usersMarkup = !usersToggle ?
        <Card>
            <i className="pi pi-chevron-down" style={{ cursor: 'pointer' }} onClick={()=>toggleUsers(!usersToggle)}><span style={{ padding: '5px' }}> Study team  </span></i>
        </Card> :
        <>
            <div className="visit">
                <i className="pi pi-chevron-up" style={{ cursor: 'pointer' }} onClick={() => toggleUsers(!usersToggle)}><span style={{ padding: '5px' }} >  Study team </span></i>
            </div>
            {/* <DataTable value={localUsers} className="noHeaders" rows={5} >
                <Column field="img" header={null}/>
                <Column field="name" header={null} />
                <Column field="designation"  header={null}/>
            </DataTable> */}
            {localUsers.map(user=>{return <Card>
                    <h6>{user.name}</h6>
            </Card>})}
        </>
    return (
        <div className='dashboard-container container'>
            <h5>Study Dashboard - {studyDetails.studyId}</h5>
            <Card >
                <div className="p-grid p-justify-end" style={{ cursor: 'pointer' }} onClick={() => toggleStudyDetails(!showExtraStudyDetails)}>
                    <i className="pi pi-angle-down"></i>
                </div>
                <div className="p-grid">
                    <div className="p-col-4">
                        <h5>Study Details </h5>
                    </div>
                    <div className="p-col-4"></div>
                    <div className="p-col-4">
                        <i className="pi pi-pencil"></i>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-4">
                        <h6>Project Code : {studyDetails.projectCode}</h6>
                    </div>
                    <div className="p-col-4"></div>
                    <div className="p-col-4">
                        <h6>Therapeutic Indication : {studyDetails.therapeuticIndication}</h6>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-4">
                        <h6>Study Code : {studyDetails.studyId}</h6>
                    </div>
                    <div className="p-col-4"></div>
                    <div className="p-col-4">
                        <h6>Study Phase : {studyDetails.studyPhase}</h6>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-4">
                        <h6>Protocol Title </h6>
                    </div>
                </div>
                <div>
                    <p>{studyDetails.studyDescription}</p>
                </div>
                {showExtraStudyDetails && <div>
                    <div className="row">
                        <div className="col-4">
                            <h6>Project Code : {studyDetails.projectCode}</h6>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h6>Therapeutic Indication : {studyDetails.therapeuticIndication}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <h6>Planned FPFP : {studyDetails.plannedFPFP}</h6>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h6>Planned Lock : {studyDetails.plannedLock}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <h6>Interventional Study : {studyDetails.interventionalStudy}</h6>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h6>Paediatric  Study : {studyDetails.paediatricStudy}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <h6>Health volunteer Study : {studyDetails.healthVolunteerStudy}</h6>
                        </div>
                    </div>
                </div>}
            </Card>
            {/* Card Sections */}
            <div className="p-grid">
                <div className="p-col">
                    <h5>CRF Assessments</h5>
                </div>
                <div className="p-align-center">
                    <i className="pi pi-plus-circle"></i>
                </div>
                <div className="p-col">
                    <div className="box">2</div>
                </div>
                <div className="p-col">
                    <div className="box">3</div>
                </div>
            </div>
            {visitMarkup}
            <Card>
                <i className="pi pi-chevron-down" style={{ cursor: 'pointer' }}><span style={{ padding: '5px' }}> Assessment schedule </span></i>
            </Card>
            {usersMarkup}
        </div>
    )
}
