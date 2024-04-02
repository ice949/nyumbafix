import React, {useState} from 'react';
import './ReportIssue.css';

const ReportIssue = () => {
    const mantainanceCategories = ['Electrical', 'Plumbing', 'Carpentry', 'Painting', 'Others'];
    const [apartmentName, setApartmentName] = useState('');
    const [unitNumber, setUnitNumber] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [description, setDescription] = useState('');
    const [mantainanceType, setMantainanceType] = useState('Electrical');
    const [image, setImage] = useState('');
  return (
    <div className='report-issue'>
        <div className="report-welcome">
            <h1>Report an issue</h1>
            <p>Describe below the issues you are facing.</p>
        </div>
        <form className="report-form">
            <div className="form-group">
                <label htmlFor="apartment-name">Apartment Name</label>
                <input type="text" id="apartment-name" name="apartment-name" value={apartmentName} onChange={(e) => setApartmentName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="unit-number">Unit Number</label>
                <input type="text" id="unit-number" name="unit-number" value={unitNumber} onChange={(e) => setUnitNumber(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="tenant-name">Tenant Name</label>
                <input type="text" id="tenant-name" name="tenant-name" value={tenantName} onChange={(e) => setTenantName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="contact-number">Contact Number</label>
                <input type="text" id="contact-number" name="contact-number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="mantainance-type">Mantainance Type</label>
                <select id="mantainance-type" name="mantainance-type" value={mantainanceType} onChange={(e) => setMantainanceType(e.target.value)} required>
                    {mantainanceCategories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="file" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} required/>
            </div>
            <div className="form-group">
                <button type="submit">Send Request</button>
            </div>
        </form>
    </div>
  )
}

export default ReportIssue