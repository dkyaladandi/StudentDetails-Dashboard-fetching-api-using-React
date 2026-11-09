import './index.css'

const BatchN4=(props)=>{
const{userDetails}=props
const{id,name,studentid,batch,email,instructorname,collegename}=userDetails
return (<li className="user-data">
    <p>{id}</p>
    <p>{name}</p>
    <p>{studentid}</p>
    <p>{batch}</p>
    <p>{email}</p>
    <p>{instructorname}</p>
    <p>{collegename}</p>
</li>)

}
export default BatchN4