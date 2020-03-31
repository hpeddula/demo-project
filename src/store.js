const studyDetails = {
    studyId:'CIDD001D2402',
    projectCode:'XXXXXXXXXX',
    therapeuticIndication:'COPD',
    studyPhase:'02',
    studyDescription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Non deserunt, sunt eaque praesentium, a cupiditate quasi exercitationem repellat iure, velit ut fugit possimus totam!Natus iure illum inventore dignissimos nam corporis nulla vero pariatur deleniti eum illo ipsa eos quasi nobis assumenda ea suscipit voluptatibus neque,sit repellat velit? Assumenda?',
    plannedFPFP:new Date().toLocaleDateString().split('/').join('.'),
    plannedLock:new Date().toLocaleDateString().split('/').join('.'),
    interventionalStudy : true ? 'Yes' :'No',
    paediatricStudy : true ? 'Yes' :'No',
    healthVolunteerStudy : true ? 'Yes' :'No'
}

const visits =[{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 1',
    visitNumber:'01',
    week:'01',
    day:'01'
},{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 2',
    visitNumber:'02',
    week:'02',
    day:'02'
},{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 3',
    visitNumber:'03',
    week:'03',
    day:'03'
},{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 4',
    visitNumber:'04',
    week:'04',
    day:'04'
},{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 5',
    visitNumber:'05',
    week:'05',
    day:'05'
},{
    epoch:'XXXXXXXXXXX',
    visitName:'Visit Name 6',
    visitNumber:'06',
    week:'06',
    day:'06'
}]

const users =[{
    img:'',
    name:'Heather Clark',
    designation:'Data Manager'
},{
    img:'',
    name:'Torsten Paulson',
    designation:'DB Developer'
},{
    img:'',
    name:'Iruka Akuchi',
    designation:'Statistical Pogrammer'
},{
    img:'',
    name:'Lungelo Ngcba',
    designation:'Clinical scientist'
}]

export {studyDetails,visits,users}